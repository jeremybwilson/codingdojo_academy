// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  
// Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubleArrayValues(array){
  // create a new placeholder array
  let newArray = [];
  // loop through the existing array values
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i] * array[i]);
    newArray.push(array[i]);
  }
  return newArray;
}
// Test cases
console.log(doubleArrayValues([1,2,3,4,5]));               // Expected output =>
console.log(doubleArrayValues([1,"Coding",3,4,"Dojo"]));   // Expected output =>