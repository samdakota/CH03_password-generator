// prompt to ask how long password should be
// function to make sure password is right length
var specialCharArray = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var lowerCharArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCharArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordOptions() {
  let length = parseInt(
    prompt("How many characters would you like your password to be?")
  );
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters long.");
    return;
  }

  let specialChar = confirm("Click OK to use special characters.");

  let lowerCase = confirm("Click OK to use lowercase characters.");

  let upperCase = confirm("Click OK to use uppercase characters.");

  let numeric = confirm("Click OK to use numeric characters.");

  var optionsObject = {
    specialChar: specialChar,
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    length: length,
  };

  return optionsObject;
}
function getRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);
  var randomElement = array[index];
  return randomElement;
}

function generatePassword() {
  var pwdOptions = getPasswordOptions();
  console.log(pwdOptions);
  var finalResult = [];
  var possibleChar = [];
  var guaranteedChar = [];
  if (pwdOptions.specialChar) {
    possibleChar = possibleChar.concat(specialCharArray);
    guaranteedChar.push(getRandomElement(specialCharArray));
    console.log(possibleChar);
  }
}

// getPasswordOptions();

// if (length === "" || length === null || length < 8 || length > 128) {
//   window.alert("Your password must be between 8 and 128 characters long.");
// } else return length;
// }
// prompt asking which character types to include in the password (require at least one)
// arrays for lowercase, uppercase, numeric, and special characters

// function to generate password

// function to display password

// options that user wants
// save those options in variable
// create basedon options

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
