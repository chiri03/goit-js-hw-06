function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter a number!");
  }

  if (input.value <= 0) {
    alert("Enter a number greater than 0! ");
  }

  for (let i = 1; i <= input.value; i++) {
    const pixels = i * 10;
    boxes.innerHTML += `<h1 style = "height:${pixels}px; width:${pixels}px; background-color:${getRandomHexColor()}"></h1>`;
  }
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});
