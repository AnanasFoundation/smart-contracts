var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    var initialEthToUsd = 300;
    deployer.deploy(FlatPricing, initialEthToUsd);
  }
  if (network == 'ropsten') {
    var initialEthToUsd = 300;
    deployer.deploy(FlatPricing, initialEthToUsd);
  }
};
