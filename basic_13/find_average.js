function findAverage(array){
  let total = 0;
  let average = 0;
  for(var i = 0; i < array.length; i += 1){
    // average = (average[i] / average.length) * average.length;
    total = total + array[i];
  }
  return total / array.length;
}
// Test cases
console.log("Here is the average of the array: " + findAverage([2,4,6,8]));
// console.log("Here is the average of the array: " + findAverage([1,3,5,7,20]));
// console.log("Here is the average of the array: " + findAverage([2,4,6,10,12,16]));

// ES6 version 
var findAverage = (array) => {
  let total = 0;
  let average = 0;
  for(var i = 0; i < array.length; i += 1){
    // average = (average[i] / average.length) * average.length;
    total = total + array[i];
  }
  return total / array.length;
}
// Test cases
console.log("Here is the average of the array: " + findAverage([1,3,5,7,20]));
console.log("Here is the average of the array: " + findAverage([2,4,6,10,12,16]));