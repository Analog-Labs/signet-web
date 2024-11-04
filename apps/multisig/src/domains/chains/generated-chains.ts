import { Chain } from './tokens'

// DO NOT MODIFY THIS FILE MANUALLY
// This file is auto-generated by scripts/chaingen.ts
export type SupportedChainIds =
  | 'polkadot'
  | 'astar'
  | 'hydradx'
  | 'kusama'
  | 'aleph-zero-testnet'
  | 'paseo-testnet'
  | 'polimec'
  | 'bittensor'
  | 'polkadot-asset-hub'
  | 'kusama-asset-hub'
  | 'acala'
  | 'aleph-zero'
  | 'bifrost-polkadot'
  | 'moonbeam'
  | 'phala'
  | 'rococo-testnet'
  | 'shibuya-testnet'
  | 'mythos'
export const supportedChains: Chain<SupportedChainIds>[] = [
  {
    id: 'polkadot',
    chainName: 'Polkadot',
    genesisHash: '0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/polkadot.svg',
    nativeToken: {
      id: 'polkadot-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://rpc.ibp.network/polkadot',
      },
      {
        url: 'wss://rpc.dotters.network/polkadot',
      },
      {
        url: 'wss://1rpc.io/dot',
      },
      {
        url: 'wss://polkadot-rpc.dwellir.com',
      },
      {
        url: 'wss://polkadot-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://polkadot-rpc.publicnode.com',
      },
      {
        url: 'wss://polkadot-public-rpc.blockops.network/ws',
      },
      {
        url: 'wss://rpc-polkadot.luckyfriday.io',
      },
      {
        url: 'wss://polkadot.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://rockx-dot.w3node.com/polka-public-dot/ws',
      },
      {
        url: 'wss://dot-rpc.stakeworld.io',
      },
    ],
    ss58Prefix: 0,
    subscanUrl: 'https://polkadot.subscan.io/',
    polkaAssemblyUrl: 'https://polkadot.polkassembly.io',
    account: '*25519',
  },
  {
    id: 'astar',
    chainName: 'Astar',
    genesisHash: '0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/astar.svg',
    nativeToken: {
      id: 'astar-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://1rpc.io/astr',
      },
      {
        url: 'wss://astar-rpc.dwellir.com',
      },
      {
        url: 'wss://rpc.astar.network',
      },
      {
        url: 'wss://astar.public.curie.radiumblock.co/ws',
      },
    ],
    ss58Prefix: 5,
    subscanUrl: 'https://astar.subscan.io/',
    polkaAssemblyUrl: 'https://astar.polkassembly.io',
    account: '*25519',
  },
  {
    id: 'hydradx',
    chainName: 'Hydration',
    genesisHash: '0xafdc188f45c71dacbaa0b62e16a91f726c7b8699a9748cdf715459de6b7f366d',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/hydradx.svg',
    nativeToken: {
      id: 'hydradx-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://hydradx-rpc.dwellir.com',
      },
      {
        url: 'wss://hydration.ibp.network',
      },
      {
        url: 'wss://hydration.dotters.network',
      },
      {
        url: 'wss://rpc.hydradx.cloud',
      },
      {
        url: 'wss://rpc.helikon.io/hydradx',
      },
      {
        url: 'wss://hydradx.paras.ibp.network',
      },
      {
        url: 'wss://hydradx.paras.dotters.network',
      },
    ],
    ss58Prefix: 63,
    subscanUrl: 'https://hydration.subscan.io/',
    polkaAssemblyUrl: 'https://centrifuge.polkassembly.io',
    account: '*25519',
  },
  {
    id: 'kusama',
    chainName: 'Kusama',
    genesisHash: '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/kusama.svg',
    nativeToken: {
      id: 'kusama-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://rpc.ibp.network/kusama',
      },
      {
        url: 'wss://rpc.dotters.network/kusama',
      },
      {
        url: 'wss://1rpc.io/ksm',
      },
      {
        url: 'wss://kusama-rpc.dwellir.com',
      },
      {
        url: 'wss://kusama-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://kusama-rpc.publicnode.com',
      },
      {
        url: 'wss://rpc-kusama.luckyfriday.io',
      },
      {
        url: 'wss://kusama.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://rockx-ksm.w3node.com/polka-public-ksm/ws',
      },
      {
        url: 'wss://ksm-rpc.stakeworld.io',
      },
    ],
    ss58Prefix: 2,
    subscanUrl: 'https://kusama.subscan.io/',
    polkaAssemblyUrl: 'https://kusama.polkassembly.io',
    account: '*25519',
  },
  {
    id: 'aleph-zero-testnet',
    chainName: 'Aleph Zero Testnet',
    genesisHash: '0x05d5279c52c484cc80396535a316add7d47b1c5b9e0398dd1f584149341460c5',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/aleph-zero-testnet.svg',
    nativeToken: {
      id: 'aleph-zero-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://aleph-zero-testnet-rpc.dwellir.com',
      },
      {
        url: 'wss://ws.test.azero.dev',
      },
    ],
    ss58Prefix: 42,
    subscanUrl: 'https://alephzero-testnet.subscan.io/',
    account: '*25519',
  },
  {
    id: 'paseo-testnet',
    chainName: 'Paseo',
    genesisHash: '0x77afd6190f1554ad45fd0d31aee62aacc33c6db0ea801129acb813f913e0764f',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/paseo-testnet.svg',
    nativeToken: {
      id: 'paseo-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://paseo.rpc.amforc.com',
      },
    ],
    ss58Prefix: 0,
    subscanUrl: 'https://paseo.subscan.io/',
    account: '*25519',
  },
  {
    id: 'polimec',
    chainName: 'Polimec',
    genesisHash: '0x7eb9354488318e7549c722669dcbdcdc526f1fef1420e7944667212f3601fdbd',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/polimec.svg',
    nativeToken: {
      id: 'polimec-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://polimec.ibp.network',
      },
      {
        url: 'wss://polimec.dotters.network',
      },
      {
        url: 'wss://polimec.rpc.amforc.com',
      },
      {
        url: 'wss://rpc.helikon.io/polimec',
      },
      {
        url: 'wss://rpc.polimec.org',
      },
    ],
    ss58Prefix: 41,
    subscanUrl: 'https://explorer.polimec.org/polimec/',
    account: '*25519',
  },
  {
    id: 'bittensor',
    chainName: 'Bittensor',
    genesisHash: '0x2f0555cc76fc2840a25a6ea3b9637146806f1f44b090c175ffde2a7e5ab36c03',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/bittensor.svg',
    nativeToken: {
      id: 'bittensor-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://entrypoint-finney.opentensor.ai/',
      },
    ],
    ss58Prefix: 42,
    subscanUrl: 'https://bittensor.com/scan',
    account: '*25519',
  },
  {
    id: 'polkadot-asset-hub',
    chainName: 'Polkadot Asset Hub',
    genesisHash: '0x68d56f15f85d3136970ec16946040bc1752654e906147f7e43e9d539d7c3de2f',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/polkadot-asset-hub.svg',
    nativeToken: {
      id: 'polkadot-asset-hub-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://sys.ibp.network/statemint',
      },
      {
        url: 'wss://sys.dotters.network/statemint',
      },
      {
        url: 'wss://sys.ibp.network/asset-hub-polkadot',
      },
      {
        url: 'wss://sys.dotters.network/asset-hub-polkadot',
      },
      {
        url: 'wss://asset-hub-polkadot-rpc.dwellir.com',
      },
      {
        url: 'wss://statemint-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://rpc-asset-hub-polkadot.luckyfriday.io',
      },
      {
        url: 'wss://polkadot-asset-hub-rpc.polkadot.io',
      },
      {
        url: 'wss://statemint.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://dot-rpc.stakeworld.io/assethub',
      },
    ],
    ss58Prefix: 0,
    subscanUrl: 'https://assethub-polkadot.subscan.io/',
    account: '*25519',
  },
  {
    id: 'kusama-asset-hub',
    chainName: 'Kusama Asset Hub',
    genesisHash: '0x48239ef607d7928874027a43a67689209727dfb3d3dc5e5b03a39bdc2eda771a',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/kusama-asset-hub.svg',
    nativeToken: {
      id: 'kusama-asset-hub-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://sys.ibp.network/statemine',
      },
      {
        url: 'wss://sys.dotters.network/statemine',
      },
      {
        url: 'wss://asset-hub-kusama-rpc.dwellir.com',
      },
      {
        url: 'wss://statemine-rpc-tn.dwellir.com',
      },
      {
        url: 'wss://rpc-asset-hub-kusama.luckyfriday.io',
      },
      {
        url: 'wss://kusama-asset-hub-rpc.polkadot.io',
      },
      {
        url: 'wss://statemine.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://ksm-rpc.stakeworld.io/assethub',
      },
    ],
    ss58Prefix: 2,
    subscanUrl: 'https://assethub-kusama.subscan.io/',
    account: '*25519',
  },
  {
    id: 'acala',
    chainName: 'Acala',
    genesisHash: '0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/acala.svg',
    nativeToken: {
      id: 'acala-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://acala-rpc.dwellir.com',
      },
      {
        url: 'wss://acala-rpc-0.aca-api.network',
      },
      {
        url: 'wss://acala-rpc-1.aca-api.network',
      },
      {
        url: 'wss://acala-rpc-3.aca-api.network/ws',
      },
    ],
    ss58Prefix: 10,
    subscanUrl: 'https://acala.subscan.io/',
    account: '*25519',
  },
  {
    id: 'aleph-zero',
    chainName: 'Aleph Zero',
    genesisHash: '0x70255b4d28de0fc4e1a193d7e175ad1ccef431598211c55538f1018651a0344e',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/aleph-zero.svg',
    nativeToken: {
      id: 'aleph-zero-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://aleph-zero-rpc.dwellir.com',
      },
      {
        url: 'wss://ws.azero.dev',
      },
    ],
    ss58Prefix: 42,
    subscanUrl: 'https://alephzero.subscan.io/',
    account: '*25519',
  },
  {
    id: 'bifrost-polkadot',
    chainName: 'Bifrost Polkadot',
    genesisHash: '0x262e1b2ad728475fd6fe88e62d34c200abe6fd693931ddad144059b1eb884e5b',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/bifrost-polkadot.svg',
    nativeToken: {
      id: 'bifrost-polkadot-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://bifrost-polkadot-rpc.dwellir.com',
      },
      {
        url: 'wss://bifrost-polkadot.ibp.network',
      },
      {
        url: 'wss://bifrost-polkadot.dotters.network',
      },
      {
        url: 'wss://hk.p.bifrost-rpc.liebi.com/ws',
      },
      {
        url: 'wss://eu.bifrost-polkadot-rpc.liebi.com/ws',
      },
      {
        url: 'wss://bifrost.public.curie.radiumblock.co/ws',
      },
    ],
    ss58Prefix: 6,
    subscanUrl: 'https://bifrost.subscan.io/',
    account: '*25519',
  },
  {
    id: 'moonbeam',
    chainName: 'Moonbeam',
    genesisHash: '0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/moonbeam.svg',
    nativeToken: {
      id: 'moonbeam-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://moonbeam-rpc.dwellir.com',
      },
      {
        url: 'wss://moonbeam.ibp.network',
      },
      {
        url: 'wss://moonbeam.dotters.network',
      },
      {
        url: 'wss://moonbeam-rpc.publicnode.com',
      },
      {
        url: 'wss://wss.api.moonbeam.network',
      },
      {
        url: 'wss://moonbeam.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://moonbeam.unitedbloc.com',
      },
    ],
    ss58Prefix: 1284,
    subscanUrl: 'https://moonbeam.subscan.io/',
    account: 'secp256k1',
  },
  {
    id: 'phala',
    chainName: 'Phala',
    genesisHash: '0x1bb969d85965e4bb5a651abbedf21a54b6b31a21f66b5401cc3f1e286268d736',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/phala.svg',
    nativeToken: {
      id: 'phala-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://phala-rpc.dwellir.com',
      },
      {
        url: 'wss://phala.public.curie.radiumblock.co/ws',
      },
      {
        url: 'wss://api.phala.network/ws',
      },
    ],
    ss58Prefix: 30,
    subscanUrl: 'https://phala.subscan.io/',
    account: '*25519',
  },
  {
    id: 'rococo-testnet',
    chainName: 'Rococo',
    genesisHash: '0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/rococo-testnet.svg',
    nativeToken: {
      id: 'rococo-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://rococo-rpc.polkadot.io',
      },
    ],
    ss58Prefix: 42,
    subscanUrl: 'https://rococo.subscan.io/',
    account: '*25519',
  },
  {
    id: 'shibuya-testnet',
    chainName: 'Shibuya',
    genesisHash: '0xddb89973361a170839f80f152d2e9e38a376a5a7eccefcade763f46a8e567019',
    isTestnet: true,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/shibuya-testnet.svg',
    nativeToken: {
      id: 'shibuya-testnet-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://shibuya-rpc.dwellir.com',
      },
      {
        url: 'wss://rpc.shibuya.astar.network',
      },
    ],
    ss58Prefix: 5,
    subscanUrl: 'https://shibuya.subscan.io/',
    account: '*25519',
  },
  {
    id: 'mythos',
    chainName: 'Mythos',
    genesisHash: '0xf6ee56e9c5277df5b4ce6ae9983ee88f3cbed27d31beeb98f9f84f997a1ab0b9',
    isTestnet: false,
    logo: 'https://raw.githubusercontent.com/TalismanSociety/chaindata/main/assets/chains/mythos.svg',
    nativeToken: {
      id: 'mythos-substrate-native',
    },
    rpcs: [
      {
        url: 'wss://polkadot-mythos-rpc.polkadot.io',
      },
    ],
    ss58Prefix: 42,
    subscanUrl: 'https://mythos.subscan.io/',
    account: 'secp256k1',
  },
]
