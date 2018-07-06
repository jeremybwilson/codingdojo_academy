// Push (insert) a given value at the end of the given 
// ...array, without using any built-in array methods.
// [1,2,3,4] 9 => [1,2,3,4,9]

function push(arr, val){
  arr[arr.length] = val;
  return arr.length;
}
// var results = [2,4,6,8];
// console.log(push(results, 20));



// function to iterate through array values
function iterateArray(arr){

  // store the first elements value
  var temp = arr[0];
  
  // create a loop to traverse the array front to back
  for(var i = 0; i < arr.length; i++){

    console.log('The index is: ', i);
    console.log('The array value is: ', arr[i]);
    // store the next elements value and store it in our element
    arr[i] = arr[i + 1];

    // arr[arr.length - 1] = temp;
  }
  console.log("temp: ", temp);
  arr.length = arr.length - 1;
  console.log(arr);
}
const array_vals = [99,11,22,33,44];
iterateArray(array_vals);







function pushToBack(arr, val){
  var newArray = new Array;
  arr[arr.length] = val;

  // iterate through the array
  for(var i = 0; i < arr.length; i++){
    newArray.push(arr[i]);
  }
  // return the values of the new array
  return newArray;
}
// var results = pushToBack([1,2,3,4], 20);
// console.log('The result of pushToBack() is: ', results);
// console.log('The result of pushToBack() is: ', pushToBack([1,2,3,4,5,6], 7));
// console.log('The result of pushToBack() is: ', pushToBack(['Code', 'Is', 'Awesome'], 'Indeed!'));