function getInputValue(inputId) {
    const inputFild = document.getElementById(inputId);
    const inputamountText = inputFild.value;
    const inputAmountValue = parseFloat(inputamountText);
    // Clear Diposit Input Fild
    inputFild.value = ""
    return inputAmountValue
}
// Total Fild
function updateTotalFild(totalFildId, amount) {
    const totalElement = document.getElementById(totalFildId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    // Diposit Total
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal
}
    // Update Balance 
function updateBalance(dipositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    // Balance Total
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + dipositAmount;
        balanceTotal.innerText = newBalanceTotal
    }
    else {
        const newBalanceTotal = previousBalanceTotal - dipositAmount;
        balanceTotal.innerText = newBalanceTotal
    }
}

document.getElementById('diposit-btn').addEventListener('click', function () {
    // 1
    const dipositAmount = getInputValue('diposit-input');
    // 2
    if (dipositAmount > 0) {
        updateTotalFild ('diposit-total', dipositAmount);
        // 3
        updateBalance(dipositAmount, true)
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    // 1
    const withdrawAmonut = getInputValue('withdraw-input');
    // 2
    const currentBalance = getCurrentBalance();
    if (withdrawAmonut > 0 && withdrawAmonut < currentBalance) {
        updateTotalFild ('withdraw-total', withdrawAmonut);
         // 3
        updateBalance(withdrawAmonut, false)
    }
    if (withdrawAmonut > currentBalance) {
        console.log("you cac not withdraw more than you have in your account")
    }
})