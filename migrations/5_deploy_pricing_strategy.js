var FlatPricing = artifacts.require('./FlatPricing.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    deployer.deploy(FlatPricing);
  }
  if (network == 'ropsten') {
    deployer.deploy(FlatPricing);
  }
};
