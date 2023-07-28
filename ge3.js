let isOver = false;
while (isOver !== true) {
  let randy = Math.floor(Math.random() * 100);
  let continueLoop = confirm(
    `Your Random Number is : ${randy} - Continue the loop?`
  );
  isOver = continueLoop === true ? false : true;
}

alert("Loop is OVER!");
