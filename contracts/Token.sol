pragma solidity ^0.4.20;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract Token is MintableToken {
    address public owner;

    constructor(){
        owner = msg.sender;
    }
}