// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!"
function findEvensAndOdds(array){
  let oddCount = 0;
  let evenCount = 0;
  for(var i = 0; i < array.length; i++){
    // determine odd values
    if(array[i] % 2 !== 0){
      // determine three in a row
      oddCount++
      evenCount = 0;
    }
    // determine even values 
    else { // determine three in a row
      // increment the evenCount
      evenCount++
      oddCount = 0;
    }
    // check the count to see if three in a row - even
    if(evenCount === 3){
      // if the count is equal to 3, reset count to 0
      evenCount = 0;
      console.log("Even more so!");
    }
    // check the count to see if three in a row - odd
    if(oddCount === 3){
      oddCount = 0;
      console.log("That's odd!");
    }
  }
  // return the array
  return array;
}
// Test cases
console.log(findEvensAndOdds([1,2,3,5,7,4,6,8,10,15,20]));  // Expected output =>
console.log(findEvensAndOdds([1,3,5,7,9,11,15,17,19]));     // Expected output =>