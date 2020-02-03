var Election = artifacts.require("./Election.sol");
//artifact --> contract abstraction that is specific to truffle , gives an election artifact that represent our smart contract  
module.exports = function(deployer) {
  deployer.deploy(Election);
};
