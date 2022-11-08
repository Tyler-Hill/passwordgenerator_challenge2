
//global variables

//this is my database: numbers, special characters, lowercase letters, uppercase letters
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
let password = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");

//this function will generate the password and return it to the correct password
function generatePassword() {
  let allChoices = [];
  //ask user how long
  let passwordLength = window.prompt("please choose a number between 8 and 20 for your password length")
  // to-do validate that they entered a number between 8 and 20
  // ask user if they want numbers
  let isNumbers = window.confirm("Do you want to include numbers?")
  // ask user iuf they want uppercase
  let isUpper = window.confirm("Do you want to include uppercase letters?")
  // ask user if they want lowercase
  let isLower = window.confirm("Do you want to include lowercase letters?")
  // ask user if they want special characters
  let isSpecial = window.confirm("Do you want to include special characters?")

  //create a password using random numbers, as long as the length

  if (isNumbers === false && isSpecial === false && isLower === false && isUpper === false) {
    alert('You must choose at least one option');
    generatePassword();
  }

  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;

  } if (isUpper === true) {
    allChoices = allChoices.concat(upper);
    let maximum = upper.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(upper[rnd]);
    passwordLength--;

  } if (isLower === true) {
    allChoices = allChoices.concat(lower);
    let maximum = lower.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(lower[rnd]);
    passwordLength--;

  } if (isSpecial === true) {
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


  return password;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max);
}


// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
