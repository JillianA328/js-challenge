var generateBtn = document.querySelector("generate");

// Variable List
var passwordLength
var numberSelect
var specialChar
var upperCase
var promptResponse



// How long do you want your password to be?
function computeLength() {
  var promptResponse = prompt(
    "How many characters would you like your password to be?  Please pick a number between 8 and 128");

  var passwordLength = Number.parseInt(promptResponse, 10);


  if (Number.isNaN(passwordLength)) {
    alert("Password length must be a number")
    return computeLength();
  } else if (passwordLength == 0) {
    alert("Please pick a number between 8 and 128");
    return undefined;
  } else if (passwordLength <= 7) {
    alert("Password length must be greater than or equal to 8");
    return computeLength();
  } else if (passwordLength > 128) {
    alert("Password length must be less than 128");
    return computeLength();
  }

  return passwordLength;
}

// Do you want uppercase letters in your password?

function computeUpperCase() {
  var promptResponse = prompt(
    "Do you want  uppercase letters in your password?");

  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();
  return promptResponse === "yes";
}

// Do you want numbers in your password?
function computeNumbers() {
  var promptResponse = prompt("Do you want numbers in your password?");

  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();

  return promptResponse === "yes";
}




// Do you want special characters?
function computeSpecial() {
  var promptResponse = prompt(
    "Do you want special characters in your password?");

  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();
  return promptResponse === "yes";
}

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "~!@#$%^&*()_+|}{";

  var validCharacters = lowerCase;

  var passwordLength = computeLength();
  var upperCaseSelected = computeUpperCase();
 

  if (upperCaseSelected === undefined) {
    return;
  }
  if (upperCaseSelected === true){
    validCharacters += upperCase;
  }

  var numberSelected = computeNumbers();
  if (numberSelected === undefined) {
    return;
  }

  if (numberSelected === true) {
    validCharacters += numbers;
  }

  var specialCharSelected = computeSpecial();
  if (specialCharSelected === undefined) {
    return;
  }

  if (specialCharSelected === true) {
    validCharacters += specialChar;
  }

  var password = "";

  
  for (var i = 0; i < passwordLength; i++) {
    password += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
  }
  console.log("here's your password:' + password);")
  return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
