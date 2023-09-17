let numArray = [];

let amntNumb;

while (true) {
  amntNumb = Number(
    prompt("Enter amount of numbers - only 5, 6 or 7 allowed!")
  );
  if (isNaN(amntNumb)) {
    alert("Please Enter a valid number");
  } else if ((amntNumb < 5) | (amntNumb > 7)) {
    alert("Numbers can only be 5, 6 or 7 - Please try again");
  } else {
    break;
  }
}
let completed = false;
let counter = 0;

while (!completed) {
  let randomNumb = Math.floor(Math.random() * 40) + 1;
  if (!numArray.includes(randomNumb)) {
    numArray.push(randomNumb);
    counter++;
  }
  if (counter === amntNumb) {
    completed = true;
  }
}

document.getElementById(
  "numberList"
).innerHTML = `Your list of numbers is ${numArray.sort((a, b) => a - b)}`;

const butter = document.getElementById("butty");

butter.style.display = "block";

butter.addEventListener("click", () => {
  location.reload();
});
