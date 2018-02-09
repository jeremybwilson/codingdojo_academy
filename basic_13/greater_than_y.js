// Given an array and a value of Y, count and print...
// ...the number of array values greater than Y
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