function printSumArray(myArray) {
  // var array = [];
  var sum = 0;
  // iterate through the values 0 to 255
  for(var i = 0; i < myArray.length; i++) {
    // add the next value of the array to the sum
    sum += myArray[i]; 
    // console log the sum value, array value
    // console.log('Array value of ' + myArray[i] + ", sum = " + sum);
  }
  return sum;
}
console.log(printSumArray([1,2,3]));  // Expected result => should log 6
console.log(printSumArray([2,4,7,9,12]));
console.log(printSumArray([-2,4,7,9,0]));