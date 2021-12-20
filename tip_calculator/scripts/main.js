const billInput = document.querySelector('#bill');
const tipOptionInputs = document.querySelectorAll('.tip-option > input');
const customPercentageInput = document.querySelector('.custom-tip-value');
const numberOfPeopleInput = document.querySelector('#people-number');

const [tipAmountPerPersonElement, totalElement] = document.querySelectorAll(
  ".result > .value-description > .value"
);

const resetButton = document.querySelector('.result > button');

let billValue = 0;
let tipPercentage = 0;
let customTipPercentage = 0;
let numberOfPeople = 0;

function resetSelectedTipOption() {
  tipOptionInputs.forEach(tipOption => {
    if (tipOption.checked) {
      tipOption.checked = false;
    }
  });
}

function handleResetButtonClick() {
  billValue = 0;
  tipPercentage = 0;
  numberOfPeople = 0;

  resetSelectedTipOption();

  billInput.value = '';
  customPercentageInput.value = '';
  numberOfPeopleInput.value = '';

  tipAmountPerPersonElement.innerHTML = '$0.00';
  totalElement.innerHTML = '$0.00';
}

function calculate() {
  if (billValue === 0 || (tipPercentage === 0 && customTipPercentage === 0) || numberOfPeople === 0) {
    return;
  }

  const totalTip = billValue * (tipPercentage || customTipPercentage);
  const tipPerPerson = totalTip / numberOfPeople;
  const formattedTipPerPerson = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(tipPerPerson);
  tipAmountPerPersonElement.innerHTML = formattedTipPerPerson;

  const total = billValue + totalTip;
  const totalPerPerson = total / numberOfPeople;
  const formattedTotalPerPerson = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPerPerson);
  totalElement.innerHTML = formattedTotalPerPerson;
}

function removeChars(value, regex = /\D/g) {
  return value.replace(regex, '');
}

function applyMask(value, maskType) {
  if (maskType === 'currency') {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD'
    }).format(value);
  } else if (maskType === 'percentage') {
    return new Intl.NumberFormat('en-US', {
      style: 'percent'
    }).format(value / 100);
  }

  return rawValue;
}

function handleCurrencyInputKeyUp(event) {  
  const { value } = event.target;

  if (!value) {
    return;
  }

  const valueWithOnlyNumbersAndPeriod = removeChars(value, /[^\d\.]/g);
  const formattedValue = applyMask(valueWithOnlyNumbersAndPeriod, 'currency');

  billValue = Number(valueWithOnlyNumbersAndPeriod);

  event.target.value = formattedValue;

  calculate();
}

function handleTipOptionChange(event) {  
  const { value } = event.target;

  tipPercentage = Number(value) / 100;

  if (customTipPercentage) {
    customTipPercentage = 0;
    customPercentageInput.value = '';
  }

  calculate();
}

function handlePercentageInputKeyUp(event) {  
  const { value } = event.target;

  if (!value) {
    return;
  }

  const valueWithOnlyNumbers = removeChars(value);
  const formattedValue = applyMask(valueWithOnlyNumbers, 'percentage');

  customTipPercentage = Number(valueWithOnlyNumbers) / 100;

  if (tipPercentage) {
    tipPercentage = 0;
    resetSelectedTipOption();
  }

  event.target.value = formattedValue;

  calculate();
}

function handleNumberOfPeopleInputKeyUp(event) {  
  const { value } = event.target;

  numberOfPeople = Number(value);

  calculate();
}


billInput.addEventListener('keyup', handleCurrencyInputKeyUp);
tipOptionInputs.forEach(tipOption => {
  tipOption.addEventListener('change', handleTipOptionChange)
})
customPercentageInput.addEventListener('keyup', handlePercentageInputKeyUp);
numberOfPeopleInput.addEventListener('keyup', handleNumberOfPeopleInputKeyUp);
resetButton.addEventListener('click', handleResetButtonClick);