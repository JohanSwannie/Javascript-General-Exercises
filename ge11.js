debugger;
console.time("Leibniz");

let part = 0;

for (let k = 0; k < 10000000; k++) {
  part = part + (-1) ** k / (2 * k + 1);
}
let pi = part * 4;

console.log(pi);

console.timeEnd("Leibniz");

let end = 2;
for (let i = 1; i <= end; i++) {
  console.log(i);
}

function max(array) {
  let maxValue = array[1];
  for (let i = 1; i < array; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
}
console.log(max([1, 4, 6, 2]));

try {
  console.log("start");
} catch (error) {
  console.log("error");
} finally {
  console.log("end");
}
