// Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  
// For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleTheArray(array, N){
  let newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i] * N);
  }
  return newArray;
}
console.log(scaleTheArray([2,3,4], 3));       // Expected result => [6,9,12]
console.log(scaleTheArray([2,3,4,5,6], 5));   // Expected result => [10,15,20,25,30]