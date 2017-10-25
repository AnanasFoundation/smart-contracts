# Anacoin Smart Contracts

## Table of Contents
* [Token](#token)
* [Crowdsale](#crowdsale)
* [Wallet](#wallet)
* [Changes](#changes)


## Token
[CentrallyIssuedToken.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/CentrallyIssuedToken.sol)
* The Dala ERC20 token that will be issued during the crowdsale. 
* The token is [upgradeable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/UpgradeableToken.sol), [pausable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/PausableToken.sol), and [releasable](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/ReleasableToken.sol). 
* Tokens will be released for transfer once the crowdsale is complete, either by expiration or all tokens have been issued.

## Crowdsale
[AllocatedCrowdsale.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/AllocatedCrowdsale.sol)
* The crowdsale is based on the [TokenMarket AllocatedCrowdsale](https://github.com/TokenMarketNet/ico/blob/master/contracts/AllocatedCrowdsale.sol) contract with some alterations to support whitelisting and a dynamic ETH cap per user that increases over time.

## Wallet
[MultiSigWalletWithDailyLimit.sol](https://github.com/GetDala/dala-smart-contracts/blob/master/contracts/MultiSigWalletWithDailyLimit.sol)
* The wallet is based on the [Gnosis MultiSigWallet](https://github.com/gnosis/MultiSigWallet/blob/master/contracts/MultiSigWalletWithDailyLimit.sol)

## Changes

* The ability to take into consideration the relationship between ETH and USD since 50 ANAT = $1

# Testing 

## TestRPC (Continuous Integration)
[![CircleCI](https://circleci.com/gh/AnanasFoundation/smart-contracts.svg?style=svg)](https://circleci.com/gh/AnanasFoundation/smart-contracts)

## Ropsten

* The Smart Contracts are deployed to Ropsten via Infura
* The MultiSig Wallet Smart Contract is setup with the following two wallets:


     Wallet | Password | Private Key | Address 
     ----------- | -------- | ----------- | ------- 
     1 | AnanasFoundation1! | 3fc4e6ac0877097a3b8eb6d89bc47a5ce23f19feb7ba9fc6a7d1e8b5df14cbd7 | 0x5fE252f26e381340c8b5bBa9DFd91658d2F2D1E0 
     2 | AnanasFoundation2! | a455f1883f0ebc33fb1e3cd016a1046d42c5dc7453e266c3514d207361aae364 | 0x930F4c36d86B2Eeac79fB225a3EC0B45f350f7E2 

* The AllocatedCrowdsale Smart Contract is owned by the following wallet:

     Wallet | Password | Private Key | Address 
     ----------- | -------- | ----------- | ------- 
     3 | AnanasFoundationOwner! | 05c3573221b978747bb73a0c03939c1aeea8b6f6470ca65d6fd747242ea129e8 | 0x6c43Fe4495d345F0C65e9a26382a1cE51861e569 
