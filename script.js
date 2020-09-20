// Assign Variables:

var generateBtn = document.getElementById("generate");
var passLength = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz" //.split("") 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"//.split("")
var numbers = "1234567890"//.split("")
var special = "~!@#$%^&*()_-"//.split("")

var characters = []
var password = []


alert ("Select Password Criteria");
  
while (passLength < 8 || passLength > 128) {

  passLength = prompt("Choose a password length between 8-128 characters")
}

  if (confirm ("Do you want lowercase characters?")) {
    characters.push(lowerCase);
    console.log(characters)

}
  
  if (confirm ("Do you want uppercase characters")){
    characters.push(upperCase);
  }
  
  if (confirm ("Do you want numeric characters?")) {
  characters.push(numbers);
}

  if (confirm ("Do you want special characters?")) {
  characters.push(special);
  }

for (var i= 0; i < passLength; i++) {
password.push(characters[Math.floor(Math.random()*characters.length)]);
}

function generatePass () {
  document.getElementById("password").value = password.join(" ");
}


// Add event listener to generate button

document.getElementById("generate").addEventListener("click", generatePass);



// console.log(lowerCase)
// console.log(upperCase)
// console.log(numbers)
// console.log(special)
// console.log(passLength)
// console.log(generateBtn)

// function generateBtn () {

// var password = generateBtn();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;



// Functions


// for (var i=0, i < passLength , i++)


// function passwordParameters() {
  //   while (passLength < 8 || passLength > 128) {
  //   passLength = prompt("Choose a password length between 8-128 characters")

  // lowerCase = confirm ("Do you want lowercase characters?")

  // upperCase = confirm ("Do you want uppercase characters")

  // numbers = confirm ("Do you want numeric characters?")

  // special = confirm ("Do you want special characters?")

  //   }
  // }

// function writePassword() {
//   var password = generate
// }





// Prompts to ask
// Select the password criteria (alert)
// Choose a password length between 8-128 characters: (insert number)
// You must select at least one character type: Lowercase, uppercase, numeric, and/or special characters
// If no character critera is selected put an alert(please enter valid answer)
// Write password to the #password input
