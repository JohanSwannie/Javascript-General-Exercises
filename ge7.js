//Function - Example 1

function getMeanTemp(temperatures) {
  if (!(temperatures instanceof Array)) {
    return NaN;
  }
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}
console.log(getMeanTemp(10));
console.log(getMeanTemp([10, 30]));

//Function - Example 2 - Factorials

function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}
console.log(factorial(7));

//Function - Example 3 - Factorials with ternary statement

function factorial2(n) {
  return n > 1 ? n * factorial2(n - 1) : 1;
}
console.log(factorial2(7));

//Function - Example 3b - Factorials with ternary statement

const factorial3 = (n) => (n > 1 ? n * factorial3(n - 1) : 1);

console.log(factorial3(7));

//Function - Example 4 - Functions as firstclass members

function doNothing() {
  return undefined;
}
let a = doNothing(); // assign result of function call
let b = doNothing; // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

//Function - Example 5 - Functions as firstclass members

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function operation(func, first, second) {
  return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

//Functions - Example 6 - Function Expressions

function add(a, b) {
  return a + b;
}
let myAdd = add;
console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

//Functions - Example 7 - Function Expressions

let myAdd2 = function add(a, b) {
  return a + b;
};
console.log(add(10, 20)); // -> 30
console.log(myAdd2(10, 20)); // -> 30

//Functions - Example 8 - Function Expressions

function operation(func, first, second) {
  return func(first, second);
}
let myAdd3 = function (a, b) {
  return a + b;
};
console.log(operation(myAdd3, 10, 20)); // -> 30
console.log(
  operation(
    function (a, b) {
      return a * b;
    },
    12,
    9
  )
); // -> 200

//Functions - Example 9 - Synchronous Callback

let inner = function () {
  console.log("inner 1");
};
let outer = function (callback) {
  console.log("outer 1");
  callback();
  console.log("outer 2");
};
console.log("test 1");
outer(inner);
console.log("test 2");

//Functions - Example 10 - Asynchronous Callback

let inner2 = function () {
  console.log("inner2 1");
};
let outer2 = function (callback2) {
  console.log("outer2 1");
  setTimeout(callback2, 7000);
  console.log("outer2 2");
};
console.log("test2 1");
outer2(inner2);
console.log("test2 2");

//Functions - Example 11 - setTimeout & setInterval Functions

let inner3 = function () {
  console.log("inner3 1");
};
let outer3 = function (callback3) {
  console.log("outer3 1");
  let counter = 1;
  let timerId = setInterval(() => {
    console.log(`outer3 2 with counter : ${counter}`);
    counter++;
    callback3;
  }, 2000);
  setTimeout(() => {
    console.log("TIMER ID INTERVAL HAS BEEN CANCELLED");
    clearInterval(timerId);
  }, 10000);
};
console.log("test3 1");
outer3(inner3);
console.log("test3 2");

//Functions - Example 12 - Arrow Functions

let add2 = (a, b) => {
  return a + b;
};
console.log(add2(10, 20));

//Functions - Example 13 - Arrow Functions

let add3 = (a, b) => a + b;
console.log(add3(10, 20));

//Functions - Example 14 - Functions using forEach

let names = ["Alice", "Eve", "John", "Luke", "Mark"];
function showName(item) {
  console.log(item);
}
names.forEach(showName);

//Functions - Exercise 1 - sorting the long way

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
  let retVal = 0;
  if (a < b) {
    retVal = -1;
  } else if (a > b) {
    retVal = 1;
  }
  return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

//Functions - Exercise 2 - Sorting the short way

let numbers2 = [50, 10, 40, 30, 20];
const compareNumbers2 = (numbers2) => {
  return numbers2.sort((a, b) => a - b);
};
console.log(compareNumbers2(numbers2)); // [10, 20, 30, 40, 50]

//Functions - Exercise 3 - Sorting the shortest way

let numbers3 = [50, 10, 40, 30, 20];
console.log(`${numbers3.sort((a, b) => a - b)}`);

//Functions - Exercise 4 - Callback Functions

let action = (callback, a, b) => callback(a, b);
// or
let action2 = function (callback, a, b) {
  return callback(a, b);
};
// or
function action3(callback, a, b) {
  return callback(a, b);
}

//Functions - Exercise 5 - setInterval, setTimeout, clearInterval

let counter = 1;
let intervalId = setInterval(() => {
  console.log(counter++);
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);
