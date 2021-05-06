var generateBtn = document.querySelector("generate");

//Variance List
var passwordLength
var numberSelect
var specialChar
var upperCase
var promptResponse



// How long do you want your password to be?
function computeLength() {
  var promptResponse = prompt(
    "How many characters would you like your password to be?  Please pick a number between 8 and 128")
;

  if (passwordLength == 0) {
    alert("Please pick a number between 8 and 128");
    return undefined;
  }

var passwordLength = Number.parseInt(promptResponse, 10);
if (Number.isNaN(passwordLength)){
  alert("Password length must be a number between 1 and 128")
  return computeLength();
}

if (passwordLength < 8){
  alert("Password length must be greater than 8");
  return computeLength();
}else if (passwordLength > 128){
  alert("Password length must be less than 128");
  return computeLength();
}

return passwordLength;
}

// Do you want uppercase letters in your password?

function computeUpperCase() {
  var promptResponse = prompt ( 
    "Do you want numbers in your password?"
  );

  if (promptResponse === null) {
    return undefined;
  }
  
  promptResponse = promptResponse.toLowerCase();
  return promptResponse ==="yes";
}

// Do you want numbers in your password?
function computeNumbers(){
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
      "Do you want special characters in your password?"
    );
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
    
    var characters = lowerCase;

    var passwordLength = computeLength();
    if (passwordLength === undefined){
      return;
    }

    var upperCaseSelected = computeUpperCase(); 
    if (upperCaseSelected === undefined){
      return;
    }
    if (upperCaseSelected === true){
      characters += upperCase;
    }

    var numberSelected = computeNumbers();
    if (numberSelected === undefined){
      return;
    }

    if(numberSelected === true){
      characters += numbers;
    }

var specialCharSelected = computeSpecial();
if (specialCharSelected === undefined){
  return;
}

if (specialCharSelect === true){
  characters += specialChar;
}

var password ="";

for (var i = 0; i < passwordLength; i++) {
  password += characters.CharAt(
    Math.floor(Math.random() * characters.length)
  );
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

generateBtn.addEventListener("click",writePassword);
