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
  var finalResult = [];
  var possibleChar = [];
  var guaranteedChar = [];
  if (pwdOptions.specialChar) {
    possibleChar = possibleChar.concat(specialCharArray);
    guaranteedChar.push(getRandomElement(specialCharArray));
  }
  if (pwdOptions.lowerCase) {
    possibleChar = possibleChar.concat(lowerCharArray);
    guaranteedChar.push(getRandomElement(lowerCharArray));
  }
  if (pwdOptions.upperCase) {
    possibleChar = possibleChar.concat(upperCharArray);
    guaranteedChar.push(getRandomElement(upperCharArray));
  }
  if (pwdOptions.numeric) {
    possibleChar = possibleChar.concat(numericCharArray);
    guaranteedChar.push(getRandomElement(numericCharArray));
  }
  // how to finish up an "if" loop ? do I need a return?

  console.log(possibleChar);
  console.log(guaranteedChar);

  for (let i = 0; i < pwdOptions.length; i++) {
    let character = getRandomElement(possibleChar);
    finalResult.push(character);
  }
  for (let i = 0; i < guaranteedChar.length; i++) {
    finalResult[i] = guaranteedChar[i];
  }

  return finalResult.join("");

  // where to stringify characters before they're sent to generatePassword?
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
