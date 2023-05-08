function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const names = {
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
  changeColor: document.querySelector(".change-color"),
};

console.log();

names.changeColor.addEventListener("click", (randomColorChange) => {
  names.body.style.background = `${getRandomHexColor()}`;
  names.color.textContent = getRandomHexColor();
});
