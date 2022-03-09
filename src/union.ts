type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number";

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // if (typeof n1 === "number" && typeof n2 === "number") {
  //   return n1 + n2;
  // } else {
  //   return n1.toString() + n2.toString();
  // }

  if (resultConversion === "as-number") {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

const number1 = 5;
const number2 = 2.8;
const string1 = "2134";
const string2 = "test_string";

console.log(combine(number1, number2, "as-number"));
console.log(combine(string1, string2, "as-text"));
