/* Basic 13 Algorithms homework submission */

// Print 1-255
// Print all the integers from 1 to 255.

function print1to255() {
  // set arr as empty array
  var array = [];
  // iterate through fixed values 1 to 255
  for(var i = 1; i < 56; i++) {  // shortened to 56 for console logging brevity
    // for each loop, push the value of i
    array.push(i);
  }
  // return the array
  return array;
}
// print1to255();
console.log(print1to255());


// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.

function printSum0to255() {
  var array = [];
  var sum = 0;
  // iterate through the values 0 to 255
  for(var i = 0; i < 56; i++) { // shortened to 56 for console logging brevity
    // push each new value of the array
    array.push(i);
    // add the next value of the array to the sum
    sum += i; 
    // console log the sum value, array value
    console.log(array[i] + ", " + sum);
  }
  // return the array 
  return array;
}
printSum0to255();
// console.log(printSum0to255());


// Find and Print Max
// Given an array, find and print its largest element.

var arr = [-3,3,5,7];

function findMax(arr){
  var max = arr[0]; // something

  for(var i = 1; i < arr.length; i++){
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}
findMax(arr);
console.log(findMax(arr));


// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).

function oddNumbers() {
  // set empty array variable
  var array = [];
  // loop through set value of 0 - 255
  // for(var i = 1; i < arr.length; i++){
  for(var i = 1; i < 256; i++){
    // find odd values using modulo
    if(i % 2 !== 0){
      array.push(i);
    }
  }
  // return the complete array
  return array;
}
oddNumbers();


//  Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y. 

/* Given an array and a value of Y, count and print...
...the number of array values greater than Y */
function greater_than_y(arr, Y){
  // set the counter to 0
  var count = 0;
  var array = [];
  // loop through the entire array
  for(var i = 0; i < arr.length; i++){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(arr[i] > Y){
      count++
    }
  }
  // print the counter
  return count;
  console.log(count);
}
greater_than_y([1,3,5,7], 3)


// Max, Min, Average
// Given an array, print the max, min and average values for that array.

function findMinMaxAvg(arr){
  // declare placeholder variables for min, max, sum
  var min = arr[0]; // min
  var max = arr[0]; // max
  var sum = arr[0]; // sum

  // iterate through the array values
  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  // declaring avg variable for
  // ...doing the math for average
  var avg = sum / arr.length;
  // declaring a new array variable for 
  // ... new array values [min, max, avg]
  var arrnew = [max, min, avg]; 
  // output results into this new array
  return arrnew;
}
findMinMaxAvg([2,4,5,7,9,10]);


// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.

function swapNegativesWithString(arr){

  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr;
}
console.log(swapNegativesWithString([1,5,10,-2]));


// Print Odds 1-255
// Print all odd integers from 1 to 255.

function oddNumbers() {
  // set empty array variable
  var array = [];
  // loop through set value of 0 - 255
  // for(var i = 1; i < arr.length; i++){
  for(var i = 1; i < 256; i++){
    // find odd values using modulo
    if(i % 2 !== 0){
      array.push(i);
    }
  }
  // return the complete array
  return array;
}
oddNumbers();


// *Iterate and Print Array
// Iterate through a given array, printing each value.

function iterArr(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total = total + arr[i];
  }
  return total;
}

console.log(iterArr([0]));
console.log(iterArr([1,2,5]));
console.log(iterArr([-5,2,5,12]));


// Get and Print Average
// Analyze an array’s values and print the average.

function findAvg(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    // average = (average[i] / average.length) * average.length;
    total = total + arr[i];
  }
  return total / arr.length
}

findAvg([1,3,5,7,20]);


// Square the Values
// Square each value in a given array, returning that same array with changed values.

// print value of original product squared by itself
function squareVal(arr){
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
  }
  // return the array values
  return arr;
}
squareVal([1,5,10,6,4,-2]);


// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.

// write function to loop through array and
// ... replace negative values with zero
function replaceNegativesWithZero(arr){
  // list out the array values before the change
  console.log("Here is the array with negative values: " + arr);
  // loop through array values as provided by argument
  for(var i = 0; i < arr.length; i++){
    // check to see if any values in array are less than 0
    if(arr[i] < 0){
      // if any negative array values exist, set them to 0
      arr[i] = 0
    }
  }
  // console.log(arr);
  // return the array
  return arr;
}
console.log("Here is the array with no negative values: " + replaceNegativesWithZero([1,-4,5,-7,8,10,-2]));


// Shift Array Values
/* Given an array, move all values forward by one index, 
...dropping the first and leaving a '0' value at the end. */

function shiftValues(arr){
  console.log("Original array values are: " + arr);
  // set the temp var to the 1st value/index of the array - arr[0]
  var temp = arr[0];
  // iterate through the array
  for(var idx = 0; idx < arr.length - 1; idx++){
    // assign the current position to the next position
    arr[idx] = arr[idx + 1];
  }
  arr[arr.length - 1] = 0;
  return arr;
  // console.log(arr);
  // console.log(temp);
}
console.log("Updated array values are: " + shiftValues([1,2,3]));