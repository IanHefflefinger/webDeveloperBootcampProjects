

// create a function called, printReverse(), that prints the contents in the reverse order
function printReverse(ourArray) {
  for (i = ourArray.length - 1; i >= 0; i--) {
    console.log(ourArray[i]);
  }
}

// create function that returns true or false if array items are all the same or not
// function isUniform(theArray) {
//   var firstItem = theArray[0];
//   theArray.forEach(element => {
//     if (element !== firstItem) {
//       return false;
//     } else {
//       return true;
//     }
//   });
// }

function isUniform(theArray) {
  var firstItem = theArray[0];
  for (i = 1; i < theArray.length; i++) {
    if (theArray[i] !== firstItem) {
      return false;
    } 
  }
  return true;
}

// create funtion that prints sum of all numbers in the array
function sumArray(myArray) {
  var total = 0;
  myArray.forEach(element => {
    total+=element;
  });
  console.log(total);
}

// create function that return the max number in the array
function maxArray(yourArray) {
  currentMax = 0;
  yourArray.forEach(element => {
    if (element > currentMax) {
      currentMax = element;
    }
  });
  console.log(currentMax);
}

// test arrays
var testArray1 = ['a', 'b', 'c', 'd', 'e', 'f'];
var testArray2 = [1,1,1,1,1];
var testArray3 = [2,2,32,4,5]

// test print reverse
printReverse(testArray1);
// test is uniform
isUniform(testArray3);
// test sum array
sumArray(testArray3)
// test current max array
maxArray(testArray3);