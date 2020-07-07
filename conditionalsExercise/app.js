var age = Number(prompt("What is your age?"));

// if age is negative, print an error
if (age < 0) {
  console.log("Enter a positive number");
}
// if age is 21, print happy b day
if (age === 21) {
  console.log("Happy 21st birthday");
}
// if age is odd, print age is odd
if (age % 2 !== 0) {
  console.log("Your age is odd");
}
// if age is perfect square, display so
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square");
}