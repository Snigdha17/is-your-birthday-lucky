const checkNumberButton = document.querySelector("#lucky-button");
const outputArea = document.querySelector("#output-box");
checkNumberButton.addEventListener("click", IsBirthDayLucky);

function IsBirthDayLucky() {
  var dateOfBirth = document.querySelector("#date-of-birth");
  var luckyNumber = document.querySelector("#lucky-number");

  if (luckyNumber.value && dateOfBirth.value) {
    if (luckyNumber.value < 0) {
      outputArea.innerText = "Enter a positive lucky number";
    } else {
      const dateOfBirthValue = dateOfBirth.value;
      const sum = calculateSumOfDigits(dateOfBirthValue);

      if (compareValues(sum, luckyNumber.value)) {
        outputArea.innerText = "Your Birthday is Lucky!!🥳🥳";
      } else {
        outputArea.innerText = "Your Birthday is Not Lucky!🙁";
      }
    }
  } else {
    outputArea.innerText = "Please enter both the date and the lucky number";
  }
}

function calculateSumOfDigits(dateOfBirthValue) {
  dateOfBirthValue = dateOfBirthValue.replaceAll("-", "");
  console.log(dateOfBirthValue);
  let sum = 0;
  while (dateOfBirthValue > 0) {
    sum = sum + (dateOfBirthValue % 10);
    dateOfBirthValue = Math.floor(dateOfBirthValue / 10);
  }
  return sum;
}

function compareValues(sum, luckyNumberValue) {
  return sum % luckyNumberValue === 0 ? true : false;
}
