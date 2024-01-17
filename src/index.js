function sayWelcome() {
  let userName = prompt("What is your name?");

  let head = document.querySelector("h1");
  head.innerHTML = "Congratulations😊" + userName + " you just signed up!";
}
let heading = document.querySelector("button");
heading.addEventListener("click", sayWelcome);
