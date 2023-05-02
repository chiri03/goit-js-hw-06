let counterValue = document.querySelectorAll("button");

const decrement = counterValue[0];
const increment = counterValue[1];
let value = document.querySelector("#value");

increment.addEventListener("click", () => {
  counterValue = Number(value.innerText) + 1;
  value.innerText = counterValue;
});

decrement.addEventListener("click", () => {
  counterValue = Number(value.innerText) - 1;

  if (counterValue < 0) {
    counterValue = 0;
  }

  value.innerText = counterValue;
});
