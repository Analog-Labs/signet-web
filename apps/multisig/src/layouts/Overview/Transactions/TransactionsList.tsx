import { Transaction, selectedMultisigState } from '@domains/multisig'
import { useMemo } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { groupTransactionsByDay } from './utils'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useToast } from '@components/ui/use-toast'
import { unknownConfirmedTransactionsState } from '@domains/tx-history'
import { TabsContent } from '@components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import TransactionSummaryRow from './TransactionSummaryRow'
import { TransactionSidesheet } from '@components/TransactionSidesheet'
import { makeTransactionID } from '@util/misc'
import { CircularProgressIndicator, EyeOfSauronProgressIndicator } from '@talismn/ui'

function extractHash(url: string, value: string) {
  const parts = url.split('/')
  const txIndex = parts.indexOf(`${value}-tx`)
  if (txIndex === -1 || txIndex + 1 >= parts.length) {
    return null
  }
  return parts[txIndex + 1]
}

export const TransactionsList = ({
  indexing,
  loading,
  transactions,
  value,
}: {
  indexing?: number
  loading: boolean
  transactions: Transaction[]
  value: string
}) => {
  let location = useLocation().pathname
  const navigate = useNavigate()
  const groupedTransactions = useMemo(() => {
    return groupTransactionsByDay(transactions)
  }, [transactions])
  const _selectedMultisig = useRecoilValue(selectedMultisigState)
  const openTransaction = useMemo(
    () => transactions.find(t => (t.draft?.id ?? t.hash) === extractHash(location, value)),
    [transactions, location, value]
  )

  const multisig = openTransaction?.multisig || _selectedMultisig

  const { toast } = useToast()
  const setUnknownTransactions = useSetRecoilState(unknownConfirmedTransactionsState)

  return (
    <TabsContent value={value} className="flex-col flex-1 items-start gap-[16px] w-full [&[data-state=active]]:flex">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col flex-1 w-full"
        >
          {!!indexing && (
            <div className="flex items-center mb-[16px] gap-[8px]">
              <CircularProgressIndicator />
              <p className=" text-gray-100 mt-[3px]">Indexing {indexing} new transactions...</p>
            </div>
          )}
          {loading && transactions.length === 0 ? (
            <div className="mx-[24px]">
              <EyeOfSauronProgressIndicator />
            </div>
          ) : (
            <div className="gap-[24px] w-full flex flex-col flex-1">
              {groupedTransactions.map(([day, transactions]) => (
                <div key={day}>
                  <p>{day}</p>
                  <div className="flex flex-col gap-[20px] mt-[8px] w-full">
                    {transactions.map(t => (
                      <motion.div key={t.draft?.id ?? t.id} whileHover={{ scale: 1.015 }} className="cursor-pointer">
                        <TransactionSummaryRow
                          onClick={() =>
                            navigate(
                              `/overview/${value}-tx/${t.draft?.id ?? t.hash}?tab=${value}&teamId=${multisig.id}`
                            )
                          }
                          t={t}
                          shortDate={true}
                          showDraftBadge
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
              {groupedTransactions.length === 0 && <div>All caught up 🏖️</div>}
              <Routes>
                <Route
                  path={`/${value}-tx/:hash`}
                  element={
                    !loading && !openTransaction ? null : (
                      <TransactionSidesheet
                        calldata="0x"
                        description={openTransaction?.description ?? ''}
                        open={!!openTransaction}
                        t={openTransaction}
                        otherTxMetadata={{
                          changeConfigDetails: openTransaction?.decoded?.changeConfigDetails
                            ? {
                                newMembers: openTransaction.decoded.changeConfigDetails.signers,
                                newThreshold: openTransaction.decoded.changeConfigDetails.threshold,
                              }
                            : undefined,
                        }}
                        onApproved={({ result, executed }) => {
                          if (executed) {
                            setUnknownTransactions(prev => [
                              ...prev,
                              `${multisig.id}-${makeTransactionID(
                                multisig.chain,
                                result.blockNumber?.toNumber() ?? 0,
                                result.txIndex ?? 0
                              )}`,
                            ])
                          }
                        }}
                        onApproveFailed={e => {
                          console.error(e)
                          navigate(`/overview?tab=${value}&teamId=${multisig.id}`)
                          toast({
                            title: 'Failed to approve transaction',
                            description: e.message,
                          })
                        }}
                        onClose={() => {
                          navigate(`/overview?tab=${value}&teamId=${multisig.id}`)
                        }}
                        onRejected={({ error }) => {
                          navigate(`/overview?tab=${value}&teamId=${multisig.id}`)
                          if (error) {
                            console.error(error)
                            toast({
                              title: 'Failed to reject transaction',
                              description: error,
                            })
                          }
                        }}
                      />
                    )
                  }
                />
              </Routes>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </TabsContent>
  )
}
