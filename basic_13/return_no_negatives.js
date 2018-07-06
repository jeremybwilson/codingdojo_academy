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



function noNegatives(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] < 0){
      array[i] = 0;
    }
  }
  return array;
}
console.log("Here is the array with no negative values: " + noNegatives([1,-4,5,-7,8,10,-2]));