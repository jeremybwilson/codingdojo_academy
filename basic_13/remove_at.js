// ======================================================================================
// RemoveAt
// Given an array and an index into the array, remove and 
// return the array value at that index. Do this without using any 
// built-in array methods except pop(). 
// Think of PopFront(arr) as equivalent to RemoveAt(arr,0). 
// ======================================================================================

let arrayOfVals = [1, 'hi', 2, 'hello', 'another'];

function removeAt1(arr, idx) {
  let tempVal = arr[idx];
  for (let i = idx; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
  }
  // pop the duplicate value (tempVal) off the returned array
  arr.pop();
  return arr;
}
console.log(removeAt1(arrayOfVals, 3));  // removes 'hello' at test[3]
console.log(removeAt1([1, 'Jeremy', 2, 'Alex', 3, 'Anika'], 1));  // removes 'Jeremy' at arr[1]
console.log(removeAt1([1,2,3,4], 3));
console.log(removeAt1([0,10,20,30,40,50], 3));

let arrayOfVals1 = [1, 'hi', 2, 'hello', 'another'];

function removeAt2(arr, idx) {
    let tempVal = arr[idx];
    for(let i = idx; i <= arr.length - 1; i++){
        arr[i] = arr[i+1];
        // console.log(arr[i]);
    } 
    // arr.pop();
    arr.length -= 1;
    return arr;
}
console.log(removeAt2(arrayOfVals1, 3));  // removes 'hello' at arr[3]
console.log(removeAt2([1, 'Jeremy', 2, 'Alex', 3, 'Anika'], 1));  // removes 'Jeremy' at arr[1]


// ======================================================================================
// Pseudo Code - save value at index to remove.  start loop from index, 
// then go through array, swapping values forward. for the last part,  either cut the length -1 
// and return first value, or push new value to the end and then pop, return pop value.

let arrayOfVals2 = [1, 2, 3, 4, 5, 6];

function removeAt3(inputArray, indexToRemove){
  let removeValue = inputArray[indexToRemove];
  for(let i = indexToRemove; i < inputArray.length; i++){
    inputArray[i] = inputArray[i + 1];
  }
  // now index to Remove doesn't exist (except in tempVar)
  // so either cut length and return the tempVar
  inputArray.length = inputArray.length - 1;
  return removeValue
  // or swap in remove value to back and pop
  // inputArray[inputArray.length - 1] = removeValue
  // return inputArray.pop();
}

console.log('Removed:', removeAt3(arrayOfVals2, 1));
console.log(arrayOfVals2);
console.log(removeAt3([1, 'Jeremy', 2, 'Alex', 3, 'Anika'], 1));  // removes 'Jeremy' at arr[1]
console.log(removeAt3([1,2,3,4], 3));
console.log(removeAt3([0,10,20,30,40,50], 3));