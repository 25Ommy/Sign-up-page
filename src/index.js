let button = document.querySelector("button");

let form = document.querySelector("#form");
let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let emailInput = document.querySelector("#email");
let ageInput = document.querySelector("#age");
let cityInput = document.querySelector("#city");

let outputUsernames = (event) => {
  event.preventDefault();
  button.innerText = "Loading...";
  let name = nameInput.value;
  let surname = surnameInput.value;
  let email = emailInput.value;
  let age = ageInput.value;
  let city = cityInput.value;

  let PersonAsAnObject = {
    name,
    surname,
    email,
    age,
    city,
  };
  let replace = document.querySelector("h2");

  replace.style.width = "200px";
  replace.style.wordWrap = "break-word";
  replace.style.alignSelf = "center";
  replace.style.textAlign = "center";

  console.log("PersonAsAnObject==>", PersonAsAnObject);

  let PersonAsAJsonString = JSON.stringify(PersonAsAnObject);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: PersonAsAJsonString,
    Headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((json) => (replace.innerText = PersonAsAJsonString))
    .catch((error) => console.log(error))
    .finally(() => (button.innerText = "Sign-in"));
};
form.addEventListener("submit", outputUsernames);
