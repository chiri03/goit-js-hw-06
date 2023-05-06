const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  let email = form.elements.email.value;
  let password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All field must be filled  ");
  }

  const userData = { email, password };
  console.log(userData);
  event.preventDefault();
  form.reset();
});
