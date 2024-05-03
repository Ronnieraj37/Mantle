/* global ethers task */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  paths: {
    artifacts: "../client/src/artifacts",
  },
  networks: {
    amoy: {
      url: process.env.POLYGON_AMOY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
