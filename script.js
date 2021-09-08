// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "S", "Y", "Z"];
var numeric = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?","/", "_", "@", "[", "^", "`", "{", "|", "}", "~"];

// Variable declarations
var pwlength = "";
var pwlowerCase;
var pwupperCase;
var pwnumeric;
var pwspecialChar;

// Prompt for password length
function generatePassword () {
  var pwlength = (prompt("How long does your password need to be? Between 8 and 128"));

  //check length is within parameters
  while(pwlength < 8 || pwlength > 128) {
    alert("Password length must be between 8 and 128. Please try again");
    var pwlength = (prompt("How long does your password need to be? Between 8 and 128"));
  }

//   // Return length chosen

//   alert("Your password")
// }

// password confirmation details
var pwlowerCase = confirm("Ok if you would like lowercase characters");
var pwupperCase = confirm("Ok if you would like uppoercase characters");
var pwnumeric = confirm("Ok if you would like numeric characters")
var pwspecialChar = confirm("Ok if you would like special characters")

// Loop if no options are chosen

  while(pwlowerCase === false && pwupperCase === false && pwnumeric === false && pwspecialChar === false) {
    alert("At least one parameter must be chosen");
    var pwlowerCase = confirm("Ok if you would like lowercase characters");
    var pwupperCase = confirm("Ok if you would like uppoercase characters");
    var pwnumeric = confirm("Ok if you would like numeric characters")
    var pwspecialChar = confirm("Ok if you would like special characters")
  };

      // actions for the password parameters
      var passwordCharacters = []
      
      if (pwlowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCase)
      }
      if (pwupperCase) {
        passwordCharacters = passwordCharacters.concat(upperCase)
      }
      if (pwnumeric) {
        passwordCharacters = passwordCharacters.concat(numeric)
      }
      if (pwspecialChar) {
        passwordCharacters = passwordCharacters.concat(specialChar)
      }
      
      console.log(passwordCharacters) 

      // Loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < pwlength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}


// Write password to the #password input,
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword)