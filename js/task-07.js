const fontSizeControl = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  fontSizeText.style.fontSize = `${fontSizeControl.value}px`;
});
