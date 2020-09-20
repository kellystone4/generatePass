// Variables:

var generateBtn = document.getElementById("generate");
var passLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz" 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var special = "~!@#$%^&*()_-"
var characters = ""
var password = ""


// Password Criteria 

alert ("Select Password Criteria");
  
while (passLength < 8 || passLength > 128) {
  passLength = prompt("Choose a password length between 8-128 characters")
}

if (confirm ("Do you want lowercase characters?")) {
    characters += lowerCase;
}
  
if (confirm ("Do you want uppercase characters")){
    characters += upperCase;
}
  
if (confirm ("Do you want numeric characters?")) {
    characters += numbers;
}

if (confirm ("Do you want special characters?")) {
    characters += (special);
}

// Generate Password  

for (var i= 0; i < passLength; i++) {
password += (characters[Math.floor(Math.random()*characters.length)]);
}

function generatePass () {
  document.getElementById("password").value = password;
}

// Generate Button

document.getElementById("generate").addEventListener("click", generatePass);

