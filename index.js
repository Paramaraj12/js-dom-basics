let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hello " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hello " + storedName;
}
myButton.onclick = function() {};
if (setUserName() == true) {
  localStorage.removeItem();
}
