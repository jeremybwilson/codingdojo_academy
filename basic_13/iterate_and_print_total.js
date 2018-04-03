// write a function to iterate and sum all the values of an array
function iterArr(array) {
  var total = 0;
  // iterate through the array contents
  for(var index = 0; index < array.length; index += 1){
    // total the values of a given array
    // total = total + array[index];
    total += array[index];
  }
  // return the array total
  return total;
}
console.log(iterArr([0]));  // => 0
console.log(iterArr([1,2,5]));  // => 8
console.log(iterArr([-5,2,5,12]));  // => 14