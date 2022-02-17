const inputIncome = document.getElementById('input-income');
const inputFood = document.getElementById('input-food');
const inputRent = document.getElementById('input-rent');
const inputClothes = document.getElementById('input-clothes');

const calculateBtn = document.getElementById('calculate-btn');

const totalExpenses = document.getElementById('total-expenses');
const totalBalance = document.getElementById('total-balance');
const percentage = document.getElementById('percentage');

const percentageBtn = document.getElementById('percentage-btn');

const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

function getInput(input) {
    const inputName = document.getElementById(input);
    const inputValue = parseFloat(inputName.value);
    return inputValue;
}

function getText(inner) {
    const text = document.getElementById(inner);
    const textValue = parseFloat(text.innerText);
    return textValue;
}

function multiply(amountSaving) {
    const saving = saving / amountSaving;
    return saving;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const costFood = getInput('input-food');
    const costRent = getInput('input-rent');
    const costClothes = getInput('input-clothes');
    const totalCost = costFood + costRent + costClothes;
    totalExpenses.innerText = totalCost;
    // income - expenses 
    const income = getInput('input-income');
    const incomeAll = income - totalCost;
    totalBalance.innerText = incomeAll;
    return incomeAll;

});

document.getElementById('percentage-btn').addEventListener('click', function () {
    const income = getInput('input-income');
    const savingCost = getInput('percentage');
    const multiplySaving = (income * savingCost) / 100;
    savingAmount.innerText = multiplySaving;
    // final Balance
    const finalBalance = getText('total-balance');
    const complete = getText('saving-amount')
    const totalComplete = finalBalance - complete;
    remainingBalance.innerText = totalComplete;
});