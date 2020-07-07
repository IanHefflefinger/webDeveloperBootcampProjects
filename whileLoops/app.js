// Print all the numbers between -10 and 19
console.log("Print all the numbers between -10 and 19");
var i = -10;
while(i <= 19) {
  console.log(i);
  i++;
}

// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
var i = 10;
while(i <= 40) {
  if(i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
var i = 300;
while(i <= 333) {
  if(i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
var i = 5;
while(i <= 50) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
  i++;
}
