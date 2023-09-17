let isOver = false;
let numArray = [];

while (!isOver) {
  randy = Math.floor(Math.random() * 40) + 1;
  if (!numArray.includes(randy)) {
    numArray.push(randy);
  }
  let continueLoop = confirm(
    `Valid random number added if no duplicates was found - Continue the loop?`
  );
  isOver = continueLoop === true ? false : true;
}

alert(
  "You reached the end of your random number search! See your list of numbers below"
);

document.getElementById(
  "numberList"
).innerHTML = `Your number list = ${numArray}`;

const butter = document.getElementById("butty");

butty.style.display = "block";

butty.addEventListener("click", () => {
  location.reload();
});
