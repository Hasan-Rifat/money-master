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

document.getElementById('calculate-btn').addEventListener('click', function(){
    const costFood = getInput('input-food');
    const costRent = getInput('input-rent');
    const costClothes = getInput('input-clothes');
    const totalCost = costFood + costRent + costClothes;
    totalExpenses.innerText = totalCost;
});