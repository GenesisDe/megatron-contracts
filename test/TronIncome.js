const TronIncome = artifacts.require("TronIncome");
var expect = require('chai').expect;

contract("TronIncome", (accounts) => {
  let TronIncomeInstance;
  let owner = accounts[0];

  beforeEach(async () => {
    TronIncomeInstance = await TronIncome.deployed();
  });

   it("should be initialized some values", async () => {
    const result = await TronIncomeInstance.owner();

    expect(result).to.equal(owner);
   })
})
