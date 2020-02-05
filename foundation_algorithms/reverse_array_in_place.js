// Reverse Array - Given an array, write a function that reverses values, in-place.  
// Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(array){
  for(let i = 0; i < array.length / 2; i++){
    let temp = array[i];
    // set array index to array index (length minus 1 minus i)
    array[i] = array[array.length - 1 - i];
    // assign back to temp
    array[array.length - 1 - i] = temp;
    // determine swap values
    // [1, 2, 3, 4, 5, 6]
    //  ^. ^        ^  ^
  }
  return array;
}
// Test cases
console.log(reverseArray([3,1,6,4,2]));
console.log(reverseArray([true,1,6,4,pizza]));