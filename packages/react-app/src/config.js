import { Goerli, Sepolia, Mainnet } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

//test
// export const ROUTER_ADDRESS = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008";

export const DAPP_CONFIG = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/d095aec74a90471186ddb1465b9ec35c",
    [Sepolia.chainId]:
      "https://sepolia.infura.io/v3/d095aec74a90471186ddb1465b9ec35c",
  },
};
// import { Goerli } from "@usedapp/core";

// export const ROUTER_ADDRESS = "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a";

// export const DAPP_CONFIG = {
//   readOnlyChainId: Goerli.chainId,
//   readOnlyUrls: {
//     [Goerli.chainId]: "https://api.zan.top/node/v1/eth/goerli/public",
//   },
// };
