/**
 * Assumption: account statements are sorted monthwise
 * case 1: if variable decrease ==> A
 * case 2: if same decrease ==> B
 * case 3: if less than 2 object in array ==> Neither A nor B
 * case 4: if balance is increasing ==> Neither A nor B
 * case 5: if no change in amount ==> B
 */

const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/

    // Write your logic here  - No pressure 😁 //
    let historyCount = accountBalanceHistory.length;
    let result = "B";

    if (historyCount <= 2) {
        return "Either A or B"
    }

    let prevDiff = accountBalanceHistory[historyCount - 1].account.balance.amount - accountBalanceHistory[historyCount - 2].account.balance.amount;

    for (let i = historyCount - 2; i > 0; i--) {

        let currentDiff = accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i - 1].account.balance.amount
        if (currentDiff < 0) {
            result = "Neither A nor B";
            break;
        }
        if (prevDiff !== currentDiff) {
            result = "A"
            break;
        }
        prevDiff = currentDiff;
    }

    return result;
};

module.exports = {
    accountTypeChecker
}