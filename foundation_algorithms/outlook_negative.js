// Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].
function outlookNegative(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    // if(array[i] > 0){
    //   newArray.push(array[i] * -1);
    // } else {
    //   newArray.push(array[i]);
    // }
    newArray.push(array[i] > 0 ? -array[i] : array[i]);
  }
  return newArray;
}
// Test cases 
console.log(outlookNegative([1,-3,5]));  // Expected result => 