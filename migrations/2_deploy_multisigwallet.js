var MultiSigWallet = artifacts.require('./MultiSigWallet.sol');

module.exports = function (deployer, network) {
  if (network == 'development') {
    deployer.deploy(MultiSigWallet, ['0xc40a866df87e14fe9ea65d49766b8b27bef5739b', '0x7997d47a3c6480b8b6dd7650c45b997e67169b56'], 2);
  }
  if (network == 'ropsten') {
    //account1
    //password = AnanasFoundation1!
    //private key = 3fc4e6ac0877097a3b8eb6d89bc47a5ce23f19feb7ba9fc6a7d1e8b5df14cbd7
    //address = 0x5fE252f26e381340c8b5bBa9DFd91658d2F2D1E0

    //account2
    //password = AnanasFoundation2!
    //private key = a455f1883f0ebc33fb1e3cd016a1046d42c5dc7453e266c3514d207361aae364
    //address = 0x930F4c36d86B2Eeac79fB225a3EC0B45f350f7E2
    deployer.deploy(MultiSigWallet, ['0x5fE252f26e381340c8b5bBa9DFd91658d2F2D1E0', '0x930F4c36d86B2Eeac79fB225a3EC0B45f350f7E2'], 2);
  }
};