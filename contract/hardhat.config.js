//https://eth-ropsten.alchemyapi.io/v2/l27-pg6XLtTyRq69M64SV2fjYRamzxUT

require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "ced1ae258f73fe329882f0aa3ad650c327b8ac0f5819a674c54c42a8a6f5f229",
      ],
    },
  },
  solidity: {
    version: "0.8.0",
  },
};

//0xdAEEF2756c69a4cE81c51F4Ae2Ee0174438Ee04A
