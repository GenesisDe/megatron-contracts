const TronIncome = artifacts.require("TronIncome");

module.exports = async function(deployer, network, accounts) {
  await deployer.deploy(TronIncome, accounts[0], accounts[9], 500, { from: accounts[0] });
};
