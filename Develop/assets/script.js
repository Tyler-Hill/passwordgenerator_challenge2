let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let special = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
let password = [];

let generateBtn = document.querySelector("#generate");

function generatePassword() {
  let allChoices = [];
  password = [];
  let passwordLength = window.prompt("please choose a number between 8 and 258 for your password length");

  if (passwordLength < 8 || passwordLength > 258 || isNaN(passwordLength)) {
    alert("You must choose a number between 8 and 258");
    console.log(`value 2: ${passwordLength}`);
    let passwordLength = null;
    generatePassword();
  }

  let isNumbers = window.confirm("Do you want to include numbers?");

  let isUpper = window.confirm("Do you want to include uppercase letters?");

  let isLower = window.confirm("Do you want to include lowercase letters?");

  let isSpecial = window.confirm("Do you want to include special characters?");

  if (isNumbers === false && isSpecial === false && isLower === false && isUpper === false) {
    alert("You must choose at least one option");
    generatePassword();
  }

  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upper);
    let maximum = upper.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(upper[rnd]);
    passwordLength--;
  }
  if (isLower === true) {
    allChoices = allChoices.concat(lower);
    let maximum = lower.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(lower[rnd]);
    passwordLength--;
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(special);
    let maximum = special.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(special[rnd]);
    passwordLength--;
  }
  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
  console.log(`value 3: ${passwordLength}`);
  return password;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password.join("");
  console.log(`value 4: ${passwordLength}`);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
