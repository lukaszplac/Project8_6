a = -1.76;
b = 3.22;
var value = (a * a) + (2 * a * b) - (b * b);
console.log("Value = " + value);
if (value < 0) {
  console.log("Outcome value less than 0");
} else if (value === 0) {
  console.log("Outcome value equals 0");
} else {
  console.log("Outcome value bigger than 0");
}