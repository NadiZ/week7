pragma solidity ^0.4.20;


import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "./DateTime.sol";
import "./Token.sol";


contract Alarm is DateTime{
    Token token;

    address public owner;
    address public tokenAddress;
    uint price = 1 finney;
    string task = "1 + 2 = ";
    uint rightAnswer = 3;
    string sorry = "sorry, your token burned";
    string great = "great, your answer is right";

    mapping(address => uint) public wakeUpTime;

    constructor() public {
        owner = msg.sender;
        token = new Token();
        tokenAddress = address(token);
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function getAddress() public view returns(address) {
        return tokenAddress;
    }


    function buyToken() public payable {
        require (msg.value == price);
        token.mint(msg.sender,1);
        address(owner).transfer(msg.value);
    }

    function setAlarm(uint16 year, uint8 month, uint8 day, uint8 hour, uint8 minute, uint8 second) public payable{
        require(token.balanceOf(msg.sender) >= 1);
        wakeUpTime[msg.sender] = toTimestamp(year, month, day, hour, minute, second);
        token.transfer(this, 1);
    }

   function taskRequest() public view returns(string) {
        if ((now <= wakeUpTime[msg.sender] && wakeUpTime[msg.sender] - now <= 0 ) || (now > wakeUpTime[msg.sender] && now - wakeUpTime[msg.sender] <= 0 ) ){
            taskSend();
        } else {
            return sorry;
        }
    }

    function taskSend() public view returns (string) {
        return task;
    }

    function taskAnswer(uint answer) public returns(string) {
        if (answer == rightAnswer) {
            token.transfer(msg.sender, 1);
            return great;
        } else {
            return sorry;
        }
    }

    function mySetting() public view returns (uint){
        return wakeUpTime[msg.sender];
    }


}