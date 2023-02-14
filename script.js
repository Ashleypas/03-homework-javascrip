// Assignment Code
var upperCaseAhpa =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCaseAhpa =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var num =["0","1","2","3","4","5","6","7","8","9"];
var symbol =["!",",","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","///",];
var generateBtn = document.querySelector("#generate");

var passwordInput = [];
var randomCharacters = [];
var finalPassword = "";



// Function to generate new password
function generatePassword() {
  var generatePassword = document.querySelector("#generate");

  
  // line 45 to 82 is the prompts 
  numberOfCharacters = parseInt(prompt(
    "What would you like the length of the password to be? (Must be between 8 and 128)")
  );
   
    //  input must be  atleast 8 and under 128 
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      confirm("Must be atleast 8 and under 128");}
     else
      (numberOfCharacters >8 || numberOfCharacters < 128)
      for (var i = 0; i < numberOfCharacters; i++){
        passwordInput.push(numberOfCharacters[i]);
      }
     
    

  var lowerAhpa = confirm("Do you want to have lower case letters included in your password?");
    if (lowerAhpa=== true) {
      for (var i = 0; i < lowerCaseAhpa.length; i++){
        passwordInput.push(lowerCaseAhpa[i]);
      }
    }

  var upperAhpa = confirm("Do you want to have upper case letters included in your password?");
    if (upperAhpa === true) {
      for (var i = 0; i < upperCaseAhpa.length; i++){
        passwordInput.push(upperCaseAhpa[i]);
      }
    }
 
  var  number = confirm("Do you want to have numbers included in your password?");
    if ( number === true) {
      for (var i = 0; i <  num.length; i++){
        passwordInput.push( num[i]);
      }
    }
  var specialCharacters = confirm("Do you want to have special characters included in your password?");
    if (specialCharacters === true) {
      for (var i = 0; i < symbol.length; i++){
        passwordInput.push(symbol[i]);
      }
    }
    
    console.log(passwordInput)
   
    for (var i = 0; i <numberOfCharacters; i++) {
      var charactersGenerated = Math.floor(Math.random() * passwordInput.length)
      randomCharacters.push(passwordInput[charactersGenerated])
    }

  return  finalPassword = randomCharacters.join("")
  } 

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
