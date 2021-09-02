require('dotenv').config();
require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = process.env.PRIVATE_KEY || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          "f58454501792bd3ba55ebcb34cfc596783ca75742a2e2acdb42391a06b96c55c",
          `https://ropsten.infura.io/v3/a0a7a5e3c12e4d3b8c3e3b453d681d30`
        )
      },
      gas: 5000000,
      gasPrice: 30000000000,
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}