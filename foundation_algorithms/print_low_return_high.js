// Print Low, Return High - Create a function that takes array of numbers.  
// The function should print the lowest value in the array, and return the highest value in the array.
function printLowReturnHigh(array){
  let low = array[0]
  let high = array[0];
  for(var i = 0; i < array.length; i++){
    if(array[i] > high){
      high = array[i];
    }
    if(array[i] < low){
      low = array[i];
    }
  }
  let highValue = 'The high value is: ' + high;
  console.log('The low array value is:', low);
  return highValue;
}
// Test cases
console.log(printLowReturnHigh([-2, 4, 10, 20]));    // Expected result =>