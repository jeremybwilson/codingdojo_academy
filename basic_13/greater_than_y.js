// Given an array and a value of Y, count and print...
// ...the number of array values greater than Y
function greater_than_y(arr, Y){
  // set the counter to 0
  var count = 0;
  // loop through the entire array
  for(var i = 0; i < arr.length; i++){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(arr[i] > Y){
      count++
    }
  }
  // return the count
  return count;
  // print the count
  console.log(count);
}
var array_vals = [1,3,5,7,10,12,14];
greater_than_y(array_vals, 4);
// console.log(greater_than_y(array_vals, 4));


function greater_than_y(array, Y){
  var count = 0;
  // var array = []
  // loop through the entire array;
  for(var index = 0; index < array.length; index += 1){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(array[index] > Y){
      count += 1;
        }
    }
  return count;
}
var array_vals = [1,3,5,7,10,12,14];
greater_than_y(array_vals, 4);
// console.log(greater_than_y(array_vals, 4));