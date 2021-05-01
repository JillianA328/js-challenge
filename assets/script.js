 // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHTIJKLMNOPQRSTUVWXYZ"
var numberOption = "0123456789"
var specialChar = "!@#$%^&*()?[]{}"
var passwordLength
var uppercaseSelected
var numberCheck
var specialCharcheck


// Function for password length
function computeLength () {
    passwordLength = prompt ("How many characters would you like your password to be? (please choose between 8-128): ");
    
        if (passwordLength<8){
            alert("Password length must be greater than 8 characters");
            computeLength();
        }
        else (passwordLength)>128
            alert("Password length must be less than 128 characters");
            computeLength();
        }
    
        return passwordLength;

        


// Write password to the #password input






function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);