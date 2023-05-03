const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (evt) => {
  if (evt.currentTarget.value.length === 0) {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = evt.currentTarget.value;
  }
});
