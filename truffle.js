var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var wallet = require('ethereumjs-wallet');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");
const FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

var mnemonic = "couch solve unique spirit wine fine occur rhythm foot feature glory away";
var key = Buffer.from('05c3573221b978747bb73a0c03939c1aeea8b6f6470ca65d6fd747242ea129e8', 'hex');
var w = wallet.fromPrivateKey(key);
console.log(w.getAddress().toString('hex'));
var address = "0x" + w.getAddress().toString("hex");
var providerUrl = "https://ropsten.infura.io/DelxQHmlbFFpgk8ZbiH6";
var engine = new ProviderEngine();
// filters
engine.addProvider(new FilterSubprovider());

engine.addProvider(new WalletSubprovider(w, {}));
engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
engine.start(); // Required by the provider engine.

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id,
    },
    ropsten:  {
      network_id: 3,    // Official ropsten network id
      provider: engine, // Use our custom provider
      from: address     // Use the address we derived
    }
  }
};
