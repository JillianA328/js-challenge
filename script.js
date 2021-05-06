var generateBtn = document.querySelector("generate");

var passwordLength
var numberSelect
var specialChar
var upperCase



// How long do you want your password to be?
function passwordLength() {
  var passwordLength = prompt ('How many characters do you want your password to be?  Please pick a number between 1 and 128');
  }

// Do you want numbers in your password?

function numberSelect() {
  Window.prompt('Do you want numbers in your password?', 'Yes || No')
}

// Do you want uppercase letters in your password?
function upperCase() {
  Window.prompt('Do you want uppercase letters in your password?')
}

// Do you want special characters in your password?
function specialChar(){
  Window.prompt('Do you want special characters in your password?')
}










//Code to pick a random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }






/// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
