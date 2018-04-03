function swap_first_and_last_values(arr){
  // your code goes here
  // set the temp var to the 1st value/index of the array - arr[0]
  var temp = arr[0];
  // now update the arr[0] index to arr.length-1
  arr[0] = arr[arr.length - 1];
  // now switch (reset) arr[3] to
  // ... the value of the temp var
  arr[arr.length - 1] = temp;
  // now return the array
  return arr;
}
// find and swap first and last array values
var array_values = [1,2,5,8,-10];
console.log(swap_first_and_last_values(array_values));