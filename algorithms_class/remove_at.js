// removeAt - given and array and index, 
// remove value at index and return in. 

function removeAt(array, idx){
  var popped_array= array[idx];
  for (var index = array.length-1;  index > idx; index--){
      array[index-1] = array[index];
  }
  array.pop();
  return popped_array;
}
removeAt([0,2,4,6,8,10,20], 4);