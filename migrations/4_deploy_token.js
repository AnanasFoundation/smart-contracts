var CentrallyIssuedToken = artifacts.require('./CentrallyIssuedToken.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    var owner = '0xdf08f82de32b8d460adbe8d72043e3a7e25a3b39';
    var name = 'Anacoin';
    var symbol = 'ANAT';
    var totalSupply = 1 * Math.pow(10,9) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
  if(network == 'ropsten'){
    //owner account
    //password = AnanasFoundationOwner!
    //private key = 05c3573221b978747bb73a0c03939c1aeea8b6f6470ca65d6fd747242ea129e8
    //address = 0x6c43Fe4495d345F0C65e9a26382a1cE51861e569
    var owner = '0x6c43Fe4495d345F0C65e9a26382a1cE51861e569';
    var name = 'Anacoin';
    var symbol = 'ANAX';
    var totalSupply = 1 * Math.pow(10,9) * Math.pow(10,18);
    var decimals = 18;
    deployer.deploy(CentrallyIssuedToken, owner, name, symbol, totalSupply, decimals);
  }
};
