function sayWelcome() {
  let userName = prompt("What is your name?");

  let head = document.querySelector("h1");
  head.innerHTML = "Congratulations😊" + userName + " you just signed up!";
}
let heading = document.querySelector("button");
heading.addEventListener("click", sayWelcome);

let data = {
  name: "Ommy",
  surname: "Molele",
  city: "Polokwane",
  age: 23,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-type": "application/json" },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
