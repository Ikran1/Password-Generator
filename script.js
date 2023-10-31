// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Please enter the length of the password. It must be between 8 and 128 characters"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("The password length must be a number between 8 and 128.");
    return null;
  }

  var haveSpecialCharacters = prompt("Do you want to include special characters?");
  var haveNumericCharacters = prompt("Do you want to include numeric characters?");
  var haveLowercaseCharacters = prompt("Do you want to include lowercase characters?");
  var haveUppercaseCharacters = prompt("Do you want to include uppercase characters?");

  if (!haveSpecialCharacters && !haveNumericCharacters && !haveLowercaseCharacters && !haveUppercaseCharacters) {
    alert("You must select at least one character type.");
    return null;
  }

  var passwordOptions = {
    length: length,
    specialCharacters: haveSpecialCharacters,
    numericCharacters: haveNumericCharacters,
    lowerCasedCharacters: haveLowercaseCharacters,
    upperCasedCharacters: haveUppercaseCharacters
  };

  return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomArrayIndex = Math.floor(Math.random() * arr.length);
  var randomArrayElement = arr[randomArrayIndex];
  return randomArrayElement;
}


// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return "";
  }

  var potentialCharacters = [];
  var definiteCharacters = [];

  if (options.specialCharacters) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
    definiteCharacters .push(getRandom(specialCharacters));
  }

  if (options.numericCharacters) {
    potentialCharacters = potentialCharacters.concat(numericCharacters);
    definiteCharacters .push(getRandom(numericCharacters));
  }

  if (options.lowerCasedCharacters) {
    potentialCharacters = potentialCharacters.concat(lowerCasedCharacters);
    definiteCharacters .push(getRandom(lowerCasedCharacters));
  }

  if (options.upperCasedCharacters) {
    potentialCharacters = potentialCharacters.concat(upperCasedCharacters);
    definiteCharacters .push(getRandom(upperCasedCharacters));
  }

  for (var i = definiteCharacters.length; i < options.length; i++) {
    var randomCharacter = getRandom(potentialCharacters);
    definiteCharacters .push(randomCharacter);
  }

  return definiteCharacters .join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);