
var length = Number(prompt("How many characters would you like your password to be?")); {
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upperChars = confirm("Would you like to use uppercase letters?");
var lowerChars = confirm("Would you like to use lowercase letters?");
var numberChars = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");
}

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}

window.addEventListener('load', function() {
  generate();
});

function generate() {
  var password = "";

  var allowed = {};
  if (upperChars) password += rando(allowed.upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowerChars) password += rando(allowed.lowerChars = "qwertyuiopasdfghjklzxcvbnm");
  if (numberChars) password += rando(allowed.numberChars = "1234567890");
  if (symbolChars) password += rando(allowed.symbolChars = "!@#$%^&*(){}[]=<>/,.");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);