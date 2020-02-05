// Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  
// Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swapTowardsTheCenter(array){
  // let newArray = [...array];
  // loop through the array values
  for(let i = 0; i < array.length / 2; i+=2){
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
console.log(swapTowardsTheCenter([true,42,"Ada",2,"pizza"]));