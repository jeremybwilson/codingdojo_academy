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
  // console.log(count);
}
var arrayVals1 = [1,3,5,7,10,12,14];
// console.log(greater_than_y(arrayVals1, 4));



function greaterThanY(array, Y){
  let count = 0;
  // loop through the entire array;
  for(var i = 0; i < array.length; i ++){
    // check to see if the individual value...
    // ...of the array is larger than y
    if(array[i] > Y){
      // console.log(array[i])
      count++;
    }
  }
  return count;
}
let arrayVals2 = [1,3,5,7,10,12];
console.log(greaterThanY(arrayVals2, 4));

// print to new array, array values greater than Y
function greater_than_y(array, Y){
  // set empty array variable to hold new array
  var array_new = [];
  // iterate through the array values
  for(var i = 0; i < array.length; i++){
    if(array[i] > Y){
      // push the array values into the new array
      array_new.push(array[i]);
    }
  }
  // return the new array;  
  return array_new;
}
console.log(greater_than_y([1,3,5,7], 2));
console.log(greater_than_y([1,3,5,7,10,12], 4));