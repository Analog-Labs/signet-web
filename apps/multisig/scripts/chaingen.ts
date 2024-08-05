const fs = require('fs')

type Rpc = {
  url: string
}

type Account = '*25519' | 'secp256k1'

type Chain = {
  squidIds: {
    chainData: string
  }
  genesisHash: string
  chainName: string
  logo: string
  isTestnet: boolean
  nativeToken: {
    id: string
  }
  rpcs: Rpc[]
  ss58Prefix: number
  subscanUrl: string
  polkaAssemblyUrl?: string
  account: Account
}

const supportedChainIds = [
  'polkadot',
  'polkadot-asset-hub',
  'kusama',
  'kusama-asset-hub',
  'acala',
  'aleph-zero',
  'astar',
  'bifrost-polkadot',
  'bifrost-kusama',
  'centrifuge',
  'hydradx',
  'interlay',
  'karura',
  'khala',
  'kintsugi',
  'moonbeam',
  'phala',
  'rococo-testnet',
  'shibuya-testnet',
  'aleph-zero-testnet',
  'avail-turing-testnet',
  'dancebox',
  'paseo-testnet',
  'rococo-neuro-web-testnet',
  'polimec',
  'mythos',
  'bittensor',
]

const polkaAssemblyUrl: Record<string, string> = {
  astar: 'https://astar.polkassembly.io',
  centrifuge: 'https://centrifuge.polkassembly.io',
  hydradx: 'https://centrifuge.polkassembly.io',
  kusama: 'https://kusama.polkassembly.io',
  polkadot: 'https://polkadot.polkassembly.io',
  rococo: 'https://rococo.polkassembly.io',
}

const subscanUrlsOverride: Record<string, string> = {
  'aleph-zero-testnet': 'https://test.azero.dev/#/explorer/',
  'dancebox': 'https://dancebox.subscan.io/',
  'paseo-testnet': 'https://paseo.subscan.io/',
  'rococo-neuro-web-testnet': 'https://neuroweb-testnet.subscan.io/',
  'avail-turing-testnet': 'https://temp-explorer.avail.so/#/explorer',
  'polimec': 'https://explorer.polimec.org/polimec/',
  'mythos': 'https://mythos.subscan.io/',
  'bittensor': 'https://bittensor.com/scan',
}

const rpcUrlsOverride: Record<string, Rpc[]> = {
  bittensor: [{ url: `wss://bittensor-finney.api.onfinality.io/ws?apikey=` }],
}

const networkLogoOverride: Record<string, string> = {
  'avail-turing-testnet': 'https://www.availproject.org/_next/static/media/logo_large.80d5666f.png',
}

const customChains: Chain[] = [
  // example of custom chain
  // {
  //   chainName: 'Avail Turing Network',
  //   genesisHash: '0xd3d2f3a3495dc597434a99d7d449ebad6616db45e4e4f178f31cc6fa14378b70',
  //   isTestnet: true,
  //   logo: 'https://www.availproject.org/_next/static/media/logo_large.80d5666f.png',
  //   nativeToken: {
  //     id: 'avail-turing-testnet-substrate-native',
  //   },
  //   rpcs: [{ url: 'wss://turing-rpc.avail.so' }],
  //   squidIds: { chainData: 'avail-turing-testnet' },
  //   ss58Prefix: 42,
  //   subscanUrl: 'https://temp-explorer.avail.so/#/explorer',
  // },
]

const CHAINDATA_URL = 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/dist/chains/all.json'

const generateSupportedChains = async () => {
  const chaindata = (await fetch(CHAINDATA_URL).then(response => response.json())) as any
  const supportedChains: Chain[] = []

  for (const chainId of supportedChainIds) {
    // @ts-ignore
    const chain = chaindata.find(chain => chain.id === chainId)
    if (chain) {
      supportedChains.push({
        chainName: chain.name,
        genesisHash: chain.genesisHash,
        isTestnet: chain.isTestnet,
        logo: networkLogoOverride[chain.id] ?? chain.logo,
        nativeToken: {
          id: chain.nativeToken?.id,
        },
        rpcs: rpcUrlsOverride[chain.id] ?? chain.rpcs,
        squidIds: { chainData: chain.id },
        ss58Prefix: chain.prefix,
        subscanUrl: subscanUrlsOverride[chain.id] ?? chain.subscanUrl,
        polkaAssemblyUrl: polkaAssemblyUrl[chain.id],
        account: chain.account,
      })
    }
  }
  customChains.forEach(chain => supportedChains.push(chain))

  fs.writeFileSync(
    'src/domains/chains/generated-chains.ts',
    `
  import { Chain } from './tokens'

  // DO NOT MODIFY THIS FILE MANUALLY
  // This file is auto-generated by scripts/chaingen.ts
  export type SupportedChainIds = ${supportedChainIds.map(id => `'${id}'`).join(' | ')}
  export const supportedChains: Chain<SupportedChainIds>[] =  ${JSON.stringify(supportedChains, null, 2)}
  `
  )
}

generateSupportedChains()
