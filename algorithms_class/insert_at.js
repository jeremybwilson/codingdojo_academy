function insertAt(array){
  // 1) start a loop from the back of the array
  for(var index = array.length - 1; index >= 0; index--){
// 2) on the index we are on, take it's value and 
    // store it to the next index over, index += 1
    array[index + 1] = array[index];
  }
  // 3) decrement loop
  array[0] = 44;
  console.log(array);
  // 4) redefine the array of 0;
}
var array_vals = [1,2,3,4];
insertAt(array_vals);


//3. insertAt- given array, index and value, insert that value at that index

function insertAt(array, idx, val){
  for (var index = array.length; index > idx; index--){
      array[index]=array[index-1]
  }
  array[idx]=val;
  console.log(array);
}

insertAt([1,2,3,4,5,6,7,8,9],7,103);