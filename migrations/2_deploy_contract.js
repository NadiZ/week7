const alarmContract = artifacts.require("Alarm.sol");

module.exports = function(deployer, network) {
  deployer.deploy(alarmContract);
};