// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  
// Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(array){
  let positiveCount = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > 0){
      positiveCount++;
    }
    array[array.length - 1] = positiveCount;
  }
  return array;
}
// Test cases
console.log(countPositives([-1,1,1,1]));  // Expected output =>