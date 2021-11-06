const chai = require('chai')
const expect = chai.expect;
const { accountTypeChecker } = require("../account-type-checker");
const testData = require("./test-data")

describe('Account Type Checker', () => {
    describe("Check for Account Type A", () => {
        it('Check Account balance decreasing with varing with amount', () => {
            let data = accountTypeChecker(testData.ACCOUNT_A)
            expect(data).to.eql("A")
        })
    })

    describe("Check for Account Type B", () => {
        it('Check Account balance decreasing with consistent with amount', () => {
            let data = accountTypeChecker(testData.ACCOUNT_B)
            expect(data).to.eql("B")
        })
    })

    describe("Either A or B", () => {
        it('If only 2 objects present then decision', () => {
            let data = accountTypeChecker(testData.ONLY_2_OBJ)
            expect(data).to.eql("Either A or B")
        })
    })

    describe("Neither A nor B", () => {
        it('If only 2 objects present then decision', () => {
            let data = accountTypeChecker(testData.INCREASING_BAL)
            expect(data).to.eql("Neither A nor B")
        })
    })

})