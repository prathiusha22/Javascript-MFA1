
/*get the number of characters*/

let charLength11 = document.getElementById('length').value;
function charLength() {
  let charLength = document.getElementById('length').value;
  document.getElementById('result').innerHTML = charLength;
  return charLength;
}
document.getElementById('length').addEventListener('change', charLength)
let uppercase_main = document.getElementById("uppercase");
let lowercase_main = document.getElementById("lowercase");
let number_main = document.getElementById("numbers");
let symbol_main = document.getElementById("symbols");
let check = document.querySelector("input")
let btn = document.querySelector(".btn")
let result = document.getElementById("result")
let result1 = Number(result.innerHTML)
btn.addEventListener("click", e => {
  if (!uppercase_main.checked && !lowercase_main.checked && !number_main.checked && !symbol_main.checked) {
  }
  else {
    let pass = ""
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowercase = "abcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let symbol = "!@#$%^&*+="
    if (uppercase_main.checked) {
      pass += uppercase
    }
    if (lowercase_main.checked) {
      pass += lowercase
    }
    if (number_main.checked) {
      pass += number
    }
    if (symbol_main.checked) {
      pass += symbol
    }
    let output = ""
    for (let i = 0; i < Number(result.innerHTML); i++) {
      let num1 = Math.floor(Math.random() * pass.length)
      output += pass[num1]
    }
    check.value = output;
  }
})