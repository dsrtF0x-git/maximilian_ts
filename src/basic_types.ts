// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);
// console.log(result);

const person: {
  name: string;
  age: number;
} = {
  name: "Serhii",
  age: 30,
};

const stringArray: string[] = ["1"];

console.log(person.age);

const tuples: [number, string] = [1, "23"];

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
