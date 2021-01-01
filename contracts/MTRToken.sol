// SPDX-License-Identifier: MIT
pragma solidity 0.5.12;

import './TRC20';
import './Ownable';

contract MTRToken is TRC20, Ownable {
    uint256 private initialSupply = 100000000000 trx;

    constructor() public TRC20("MegaTron", "MTR") {
        _mint(_msgSender(), initialSupply);
    }
}
