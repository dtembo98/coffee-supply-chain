require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          process.env.RINKEBY_MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.RINKEBY_INFURA_KEY}`
        );
      },
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
  },
};
