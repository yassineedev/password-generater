const button = document.getElementById('generateBtn');
const output = document.getElementById('generatedCode');

button.addEventListener('click', () => {
  const password = generatePassword();
  output.value = password;
});

let password = "";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const passwordLength = 20;

const allCharacters = lowerCase + upperCase + numbers + symbols;


function generatePassword() {
    password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }
  return password;
}


console.log(generatePassword());

