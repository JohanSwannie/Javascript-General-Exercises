function div1(a, b) {
  if (b == 0) {
    throw new RangeError("Can't divide by 0");
  }
  return a / b;
}
console.log(div1(4, 2)); // -> 2
// console.log(div1(4, 0)); // -> Uncaught RangeError: Can’t divide by 0

function div2(a, b) {
  if (b == 0) {
    throw new RangeError("You can't divide this number by zero");
  }
  return a / b;
}

let numbers = [500, 50, 10, 0];

let counter = 1;

for (let i = 0; i < numbers.length; i++) {
  let result;
  try {
    result = div2(1000, numbers[i]);
  } catch (e) {
    result = e.message;
  } finally {
    console.log(`Loop ${counter} Completed`);
  }
  counter++;
  console.log(result);
}
