// Assignment code here

var characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  special: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var characterAmount = window.prompt('Enter an amount of characters:')

  if (characterAmount < 8 || characterAmount > 128) {
    window.alert('Please select an appropriate amount of characters.\n- Min: 8\n- Max: 128')
    return;
  }

  var uppercaseVerify = window.confirm('Would you like your password to contain UPPERCASE letters?')

  var lowercaseVerify = window.confirm('Would you like your password to contain lowercase letters?')

  var numbersVerify = window.confirm('Would you like your password to contain numbers?')

  var specialVerify = window.confirm('Would you like your password to contain SPECIAL characters?')

  if (uppercaseVerify === true && lowercaseVerify === true && numbers === true && specialVerify === true) {
    
  }




  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
