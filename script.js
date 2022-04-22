// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   

  var special = ["$", "#", "!", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", ">", "~", "?", "@", "\", "^", "|"]; 

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 

  var passLength = window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")

  var lowerPrompt = window.prompt("Would you like lowercase letters to be included? Enter Y or N.");
  // If Y choose random letter from lowerCase and append/add?
  lowerPrompt = lowerPrompt.toUpperCase(); 

  var upperPrompt = window.prompt("Would you like uppercase letters to be included? Enter Y or N.");
  // If Y choose random from upperCase and append
  upperPrompt = upperPrompt.toUpperCase(); 

  var numPrompt= window.prompt("Would you like numbers to be included? Enter Y or N.");
  // If Y choose random from numbers and append
  numPrompt = numPrompt.toUpperCase(); 

  var specPrompt = window.prompt("Would you like special characters to be included? Enter Y or N.");
    //If Y choose random from special and append 
  specPrompt = specPrompt.toUpperCase(); 
  // After these first four are selected, concat all selected arrays to select random characters for rest of password 

  function superArray() {
    if (lowerPrompt === "Y"){
      
    }
  }

   

  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
