/**
 * This smart contract code is Copyright 2017 TokenMarket Ltd. For more information see https://tokenmarket.net
 *
 * Licensed under the Apache License, version 2.0: https://github.com/TokenMarketNet/ico/blob/master/LICENSE.txt
 */

pragma solidity ^0.4.15;

import "./PricingStrategy.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * Fixed crowdsale pricing - everybody gets the same price.
 */
contract FlatPricing is PricingStrategy {

  using SafeMath for uint;

  /* How many weis one token costs */
  uint public ethToUsd;

  function setEthToUsd(uint _ethToUsd) {
    ethToUsd = _ethToUsd;
  }
  /**
   * Calculate the current price for buy in amount.
   *
   */
  function calculatePrice(uint value, uint weiRaised, uint tokensSold, address msgSender, uint decimals) public constant returns (uint) {
    uint anaToUsd = 50;
    uint multiplier = 10 ** 8;
    return value.mul(ethToUsd).mul(anaToUsd).div(multiplier);
  }
}
