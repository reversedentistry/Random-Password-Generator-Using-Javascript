var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   
var special = ["$", "#", "!", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", ">", "~", "?", "@", '^', '|']; 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var password = ""; 
    var superArray = [];

    var passLength = Number(window.prompt("How many characters would you like your password to be? Enter a number between 8 and 128.")); 
      if (passLength < 8) {
        alert( "Password must be at least 8 characters. Please try again.");
        return;
      }
      if (passLength > 128) {
        alert ("Password cannot be greater than 128 characters. Please try again."); 
        return;  
      }
      if (!passLength) {
        return; 
      }

    var lowerPrompt = window.confirm("Would you like lowercase letters to be included?");
  // If Y choose random letter from lowerCase and append/add
      if (lowerPrompt) {
        superArray = superArray.concat(lowerCase);       }
  
    var upperPrompt = window.confirm("Would you like uppercase letters to be included?");
  // If Y choose random from upperCase and append
      if (upperPrompt) {
        superArray = superArray.concat(upperCase); 
      }
  
    var numPrompt= window.confirm("Would you like numbers to be included?");
  // If Y choose random from numbers and append
      if (numPrompt) {
        superArray = superArray.concat(numbers); 
      }
  
    var specPrompt = window.confirm("Would you like special characters to be included?");
    //If Y choose random from special and append 
      if (specPrompt) {
        superArray = superArray.concat(special); 
      }

    console.log(superArray); 
  
    
  // After these first four are selected, aggregate all selected arrays to select random characters for rest of password 

  for (i = 0 ; i < passLength; i++) {
    
  }
    
    /*var passNum = function () {
      if (numPrompt) {
        password.append(Math.floor(Math.random() * 10))
      }
      console.log(passNum);
   
       
    Math.floor(Math.random() * [array].length)*/
     /*for (var i = 0; i < passLength; i++) 
     {
       if (lowerPrompt) {

         passwordText.append(lowerCase[Math.floor(Math.random() * lowerCase.length)]);        
      }
       if(upperPrompt) {
       
        passwordText.append(upperCase[Math.floor(Math.random() * upperCase.length)]); 
      }
       if(specPrompt){

         passwordText.append(special[Math.floor(Math.random() * special.length)]);
      }
       if(numPrompt) {
         passwordText.append(number[Math.floor(Math.random() * numbers.length)]); 
      }
    }
    console.log(passwordText); */ 
       
  }
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
