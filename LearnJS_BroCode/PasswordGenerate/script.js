console.log("Generate password");

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols,
) {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+";

  let accept = "";
  let password = "";

  accept += includeLowerCase ? lowerCase : "";
  accept += includeUpperCase ? upperCase : "";
  accept += includeNumbers ? numbers : "";
  accept += includeSymbols ? symbols : "";

  for (let i = 0; i < length; i++) {
    password += accept.charAt(Math.floor(Math.random() * accept.length));
  }
  console.log(password);
}

const passLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = false;
const includesymbols = true;

const password = generatePassword(
  passLength,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includesymbols,
);
