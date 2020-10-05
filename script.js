var numberChars = "0123456789";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbolChars = "!@#$%^&*(){}[]=<>/,.";
var passwordLength = "min = 8" "max = 128";
var allChars = numberChars + upperChars + lowerChars + symbolChars;
var newrandPasswordArray = Array(passwordLength);

 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 var randomPassword = "";

var passwordLength = Number (prompt("How many characters would you like your password to be?")); {
  if (passwordLength = isNaN(length) || length < 8 || length > 128) {
      
    alert("Length must be 8-128 characters.")
    var passwordLength = Number(prompt("How many characters would you like your password to be?"));
  } 
  
  var upperChars = confirm("Would you like to use uppercase letters?");
  var lowerChars = confirm("Would you like to use lowercase letters?");
  var numberChars = confirm("Would you like to use numbers?");
  var symbolChars = confirm("Would you like to use special characters?");
  }
  
  if (!upperChars && !lowerChars && !numberChars && !symbolChars) {
    alert("You must select at least one character type!");
    length = Number(prompt("How many characters would you like your password to be?"));
  }
  
  window.addEventListener( generateBtn, function() {
    generate();
  });
  
  function generate() {
    var password = "";
  
    var allowed = {};
    if (upperChars) password += rando(allowed.upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (lowerChars) password += rando(allowed.lowerChars = "qwertyuiopasdfghjklzxcvbnm");
    if (numberChars) password += rando(allowed.numberChars = "1234567890");
    if (symbolChars) password += rando(allowed.symbolChars = "!@#$%^&*(){}[]=<>/,.");
    if (allChars) password += rando(allowed.upperChars + allowed.lowerChars + allowed.numberChars + allowed.symbolChars);
    document.getElementById("password").value = randoSequence(password).join("");

    for (var i = 0; i < passwordLength; i++) {
      randomPassword = randomPassword + allChars[Math.floor(Math.random() * allChars.length)];
      console.log(randomPassword);
    }
    return randomPassword;
  }  
  
  // Write password to the #password input
  function writePassword() {
    var password = generate();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);