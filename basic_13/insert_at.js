// =========================================================================
// InsertAt
// Given an array, index, and additional value, 
// insert the value into the array at the given index.  
// Do this without using built-in array methods. 
// You can think of PushFront(arr,val) as equivalent to InsertAt(arr,0,val).
// =========================================================================
// Start the loop at the back and run it to the index we want, then that 
// index is what is inside the set val line outside the loop

function insertAt(inputArray, insertAtIndex, valueToInsert){
  for(let i = inputArray.length; i >= insertAtIndex; i -= 1){
    inputArray[i] = inputArray[i - 1];
  }
  // at this point, all values should be pushed + 1, and at the insert index, 
  // the val after === current index (dup)
  inputArray[insertAtIndex] = valueToInsert;
  return inputArray
}
console.log(insertAt([1, 2, 3, 4, 5], 1, 6));


function insertAtBuiltIn(inputArray, insertAtIndex, valueToInsert){
  // use splice
  inputArray.splice(insertAtIndex, 0, valueToInsert)
  return inputArray;
}
console.log(insertAtBuiltIn([1, 2, 3, 4, 5], 3, 6))