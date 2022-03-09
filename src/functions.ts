type C = string | number;

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result is: ", num);
}

function addAndHandle(n1: number, n2: number, cb: (m: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(40, 2));

let combineValues: (n1: number, n2: number) => number;

combineValues = add;

console.log(combineValues(1, 2));

addAndHandle(1, 2, (result: number) => {
  console.log(result);
});
