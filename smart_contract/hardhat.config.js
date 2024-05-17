require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {  // Corrected from 'network' to 'networks'
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/JSuaTjm7mhiga7NRz5rQ9YTWsfDFyBpF',
      accounts: [ '12443661734c2486e8d188978bf988dee31c513a367a236ddb004dfbb45aeba1' ]
    }
  }
};
