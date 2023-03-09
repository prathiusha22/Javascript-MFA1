
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

let btn = document.querySelector(".btn")
    btn.addEventListener("click", e => {
      if (!uppercase_value.checked && !lowercase_value.checked && !number_value.checked && !symbol_value.checked) {
      }
      else {
        let password = ""
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lowercase = "abcdefghijklmnopqrstuvwxyz"
        let number = "0123456789"
        let symbol = "!@#$%^&*+="
        if (uppercase_value.checked) {
          pass += uppercase
        }
         if (lowercase_value.checked) {
            password =  lowercase
        }
         if (number_value.checked) {
            password += number
        }
         if(symbol_value.checked) {
            password += symbol
        }
        let output = ""
        for (let i = 0; i < 10; i++) {
          let num = Math.floor(Math.random() * password.length)
          output += password[num]
        }
        check.value = output;
      }
    })