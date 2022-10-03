// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  window.alert("Password Requirements:\n- Minimum of 8 characters.\n- Must contain at least one UPPERCASE letter.\n- Must contain at least one lowercase letter.\n- Must contain at least one SPECIAL character.")

  var userPassword = window.prompt("Enter your password based on the requirements!")

  passwordText.textContent = userPassword

  if (userPassword.match(/[a-z]/g) && userPassword.match(/[A-Z]/g) && userPassword.match(/[0-9]/g) && userPassword.match(/[^a-zA-Z\d]/g) && userPassword.length >= 8) {
    window.alert('Your Password has been set successfully!')
    } else {
      window.alert('The value you entered does not match the set criteria. Please try again!')
    }

  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
