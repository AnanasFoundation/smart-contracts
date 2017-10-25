var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');
var FlatPricing = artifacts.require('./FlatPricing.sol');
var MultiSigWallet = artifacts.require('./MultiSigWallet.sol');
var AllocatedCrowdsale = artifacts.require('./AllocatedCrowdsale.sol');

const moment = require('moment');

module.exports = function (deployer, network) {
  if (network == 'development') {
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWallet.address;
    const start = moment.utc('2017-10-15 18:00').toDate().getTime() / 1000;
    const end = moment.utc('2017-10-31 18:00').toDate().getTime() / 1000;
    const min = 0;
    const beneficiary = '0xdf08f82de32b8d460adbe8d72043e3a7e25a3b39';
    const baseEthCap = 15 * Math.pow(10,18);
    const ethToUsd = 300;
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, ethToUsd);
  }
  if(network == 'ropsten'){
    //beneficiary account (same as token owner)
    //password = AnanasFoundationOwner!
    //private key = 05c3573221b978747bb73a0c03939c1aeea8b6f6470ca65d6fd747242ea129e8
    //address = 0x6c43Fe4495d345F0C65e9a26382a1cE51861e569
    const token = CentrallyIssuedToken.address;
    const pricing = FlatPricing.address;
    const wallet = MultiSigWallet.address;
    const start = moment.utc('2017-10-15 18:00').toDate().getTime() / 1000;
    const end = moment.utc('2017-10-31 18:00').toDate().getTime() / 1000;
    const min = 0;
    const beneficiary = '0x6c43Fe4495d345F0C65e9a26382a1cE51861e569';
    const baseEthCap = 15 * Math.pow(10,18);
    const ethToUsd = 300;
    deployer.deploy(AllocatedCrowdsale, token, pricing, wallet, start, end, min, beneficiary, baseEthCap, ethToUsd);
  }
};
