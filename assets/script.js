 // Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHTIJKLMNOPQRSTUVWXYZ"
var numberOption = "0123456789"
var specialChar = "!@#$%^&*()?[]{}"
var passwordLength
var uppercaseSelected
var numberSelected
var specialCharSelected


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

// Function for case
function computeupperCase () {
    uppercaseSelected = prompt("Do you want uppercase letters in your password?");
        uppercaseSelected = uppercaseSelected.toLowerCase();

        if (uppercaseSelected === "yes"){
            uppercaseSelected = true;
            return uppercaseSelected;
        }

        else (uppercaseSelected === "no")
            uppercaseSelected = false;
            return uppercaseSelected;
        }
       
    
// Function Number
function computeNumber(){
    numberSelected = promt("Do you want numbers in your password?");
      

      if (numberSelected === "yes"){
          numberSelected = true;
          return numberSelected;
      }

       else (numberSelected=== "no")
           numberSelected = false
           return numberSelected;
       }


// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);