let formInput = document.querySelector("#form");

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",

    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => (button.innerText = "Sign-up"));
});
