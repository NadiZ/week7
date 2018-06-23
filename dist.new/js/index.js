//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//let Web3 = require('web3.js');
if (typeof web3 !== 'undefined'){
  web3 = new Web3(web3.currentProvider);
}
else {
  alert('You have to install MetaMask !');
}

const MyContract = web3.eth.contract([ { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getHour", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getWeekday", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" }, { "name": "minute", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getDay", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getSecond", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" }, { "name": "minute", "type": "uint8" }, { "name": "second", "type": "uint8" } ], "name": "toTimestamp", "outputs": [ { "name": "timestamp", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getYear", "outputs": [ { "name": "", "type": "uint16" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [], "name": "tokenAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getMonth", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint16" } ], "name": "isLeapYear", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "year", "type": "uint256" } ], "name": "leapYearsBefore", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "month", "type": "uint8" }, { "name": "year", "type": "uint16" } ], "name": "getDaysInMonth", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "wakeUpTime", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "timestamp", "type": "uint256" } ], "name": "getMinute", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [], "name": "getAddress", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyToken", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "year", "type": "uint16" }, { "name": "month", "type": "uint8" }, { "name": "day", "type": "uint8" }, { "name": "hour", "type": "uint8" }, { "name": "minute", "type": "uint8" }, { "name": "second", "type": "uint8" } ], "name": "setAlarm", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "taskRequest", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "taskSend", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "answer", "type": "uint256" } ], "name": "taskAnswer", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "mySetting", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);
//let contractInstance = MyContract.at("0x2c4e04ffab6da938f4e56e36c206891b2de3ebd5");
let contractInstance = MyContract.at("0x06730a0e9e067e33ec1e61e14a34b0e60b69f486");

// вместо jQuery $(document).ready()
function ready(callback){
    // in case the document is already rendered
    if (document.readyState!='loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

//$(document).ready(function() { // Это тоже jQuery синтаксис
ready(function(){

 var buyToken = document.getElementById("buyToken");
  buyToken.onclick = function () {
      const funding = web3.toWei(0.001,'ether');
      contractInstance.buyToken({from: web3.eth.accounts[0], value: funding},function(err, res){
      if(!err) document.getElementById("buyingToken").innerHTML = "You bought 1 token";
        else {
          document.getElementById("buyingToken").innerHTML = "You did not buy token:" + err.message;
        }
       });
      contractInstance.getAddress({from: web3.eth.accounts[0]},function(err, res){
      if(!err) document.getElementById("gettingTokenAddress").innerHTML = "Token contract address " + res;
        else {
          document.getElementById("gettingTokenAddress").innerHTML = "There is a mistake " + err.message;
        }
       });
     }

  var setTime = document.getElementById("setTime");
  setTime.onclick = function() {
    Year = document.getElementById("inputYear").value;
    Month = document.getElementById("inputMonth").value;
    Day = document.getElementById("inputDay").value;
    Hour = document.getElementById("inputHour").value;
    Minute = document.getElementById("inputMinute").value;
    let message = Year + "." + Month + "." + Day + " " + Hour + ":" + Minute;
    console.log(message);
    contractInstance.setAlarm(Year, Month, Day, Hour, Minute, 10, {from: web3.eth.accounts[0]},
      function(err,res){
        if(!err) document.getElementById("settingTime").innerHTML = "Your alarm set";
        else {
          document.getElementById("settingTime").innerHTML = "Your alarm not set:" + err.message;
        }
       });
  }

  var showSetting = document.getElementById("showSetting");
  showSetting.onclick = function () {
      contractInstance.mySetting({from: web3.eth.accounts[0]},function(err, res){
      if(!err) document.getElementById("showingSetting").innerHTML = res;
        else {
          document.getElementById("showingSetting").innerHTML = "There is a mistake " + err.message;
        }
       });
  }

  var getTask = document.getElementById("getTask");
  getTask.onclick = function () {
      result = contractInstance.taskSend({from: web3.eth.accounts[0]}, function(err, res){
        if(!err) document.getElementById("gettingTask").innerHTML = res;
        else {
          document.getElementById("gettingTask").innerHTML = err.message;
        }
       });
  }


  var sendAnswer = document.getElementById("sendAnswer");
  answer = document.getElementById("yourAnswer").value;
  sendAnswer.onclick = function () {
    contractInstance.taskAnswer(answer, {from: web3.eth.accounts[0]}, function(err, res){
    if(!err) document.getElementById("yourResult").innerHTML = res;
        else {
          document.getElementById("yourResult").innerHTML = "There is a mistake " + err.message;
        }
       });
  }

});