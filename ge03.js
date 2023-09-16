let isOver = false;
while (isOver !== true) {
  let combination = "";
  let randy = Math.floor(Math.random() * 40);
  let continueLoop = confirm(
    `Your Random Lotto Number is : ${randy} - Continue the loop?`
  );
  isOver = continueLoop === true ? false : true;
}

alert(
  "You reached the end of your random number search! - Click Restart to search for numbers again"
);

const butter = document.getElementById("butty");

butty.style.display = "block";

butty.addEventListener("click", () => {
  location.reload();
});
