const input = document.getElementById("input");
const resultInput =  document.getElementById("result");

input.addEventListener("input", function () {
  let InputValue = this.value;
  try {
    if (!InputValue) {
      throw new Error("Заполните поле!");
    } else if (InputValue < 5) {
      throw new Error("Число меньше 5!");
    } else if (InputValue > 10) {
      throw new Error("Число больше 10!");
    } else if (isNaN( InputValue/1)) {
    
      throw new Error("Не является числовым значением!");
    } else {
        resultInput.innerText = "OK!";
    }
  } catch (e) {
    resultInput.innerText = e.message;
  }
});