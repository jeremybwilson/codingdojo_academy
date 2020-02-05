// Print One, Return Another - Build a function that takes array of numbers.  
// The function should print second-to-last value in the array, and return first odd value in the array.
function printOneReturnAnother(array){
  // determine the 2nd to last array value
  var secondToLast = array[array.length - 2];
  console.log('The 2nd to last value is: ' + secondToLast);
  // iterate through the array values
  for(var i = 0; i < array.length; i++){
    // determine the first odd array value
    if(array[i] % 2 !== 0){
      console.log('The 1st odd value is: ');
      // return the array[i] before the for loop 
      // repeats past the 1st successful match
      return array[i]; 
    }
  }
}
// Test cases
console.log(printOneReturnAnother([-2,1,4,5,10,20]));

function printOneReturnAnother2(array) {
  var odds = array.filter(function(num) {
    return num % 2
  });
  var evens = array.filter(function(num) {
    return !(num % 2)
  });
  return evens.length == 1 ? evens[0] : odds[0];
}
// Test cases
console.log(printOneReturnAnother2([-2,1,4,5,10,20]));  // Expected result =>