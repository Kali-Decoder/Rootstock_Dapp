import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
const { PRIVATE_KEY } = process.env;
const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: " http://127.0.0.1:8545/",
    },
    rootstock_testnet: {
      url: "https://public-node.testnet.rsk.co",
      accounts: [PRIVATE_KEY],
      chainId: 31,
    },
  },
  etherscan: {
    customChains: [
      {
        network: "rootstock_testnet",
        chainId: 31,
        urls: {
          apiURL: "https://api-rsk-testnet.explorer.rootstock.io/api/",
          browserURL: "https://explorer.testnet.rootstock.io/",
        },
      },
    ],
  },
  solidity: "0.8.20",
};

export default config;
