const rangeControsl = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

rangeControsl.addEventListener("input", () => {
  fontSizeText.style.fontSize = `${rangeControsl.value}px`;
});
