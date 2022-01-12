require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/OitSicQB8bAc-8XereL4EzwcN1bJqh60',
      accounts: [ 'fff20fe31ca7c2e9cfe2857cc61b6e72612c41f3d766844dba1754a7036ca483' ]
    },
  },
};

