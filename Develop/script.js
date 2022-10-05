// Assignment code here

var passwordArea = document.getElementById('password')

var characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

function uppercase() {
  return characters.uppercase[Math.floor(Math.random() * characters.uppercase.length)];
}
function lowercase() {
  return characters.lowercase[Math.floor(Math.random() * characters.lowercase.length)];
}
function numbers() {
  return characters.numbers[Math.floor(Math.random() * characters.numbers.length)];
}
function special() {
  return characters.special[Math.floor(Math.random() * characters.special.length)];
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");



// Write password to the #password input
function writePassword() {
  var passwordString = ''

  var characterAmount = window.prompt('Enter an amount of characters:')

  if (characterAmount < 8 || characterAmount > 128) {
    window.alert('Please select an appropriate amount of characters.\n- Min: 8\n- Max: 128')
    return;
  }

  var uppercaseVerify = window.confirm('Would you like your password to contain UPPERCASE letters?')

  var lowercaseVerify = window.confirm('Would you like your password to contain lowercase letters?')

  var numbersVerify = window.confirm('Would you like your password to contain numbers?')

  var specialVerify = window.confirm('Would you like your password to contain SPECIAL characters?')

  if (uppercaseVerify === false && lowercaseVerify === false && numbersVerify === false && specialVerify === false) {
    window.alert('Please confirm one of the given options to generate a password!')
  }

  if (uppercaseVerify === true && lowercaseVerify === true && numbersVerify === true && specialVerify === true) {
    
  }

  if (uppercaseVerify === true) {
    passwordString = passwordString.concat(characters.uppercase)
  }

  if (lowercaseVerify === true) {
    passwordString = passwordString.concat(characters.lowercase)
  }
  
  if (numbersVerify === true) {
    passwordString = passwordString.concat(characters.numbers)
  } 

  if (specialVerify === true) {
    passwordString = passwordString.concat(characters.special)
  } 


  var passwordOptions = passwordString.split('')

  var password = []

  

  
  for (var index = 0; index < characterAmount; index++) {
    var randomNumber = Math.floor(Math.random() * passwordOptions.length)
    var random = passwordOptions[randomNumber]
    password.push(random)  
  }
  password = password.join('')
  passwordArea.textContent = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
