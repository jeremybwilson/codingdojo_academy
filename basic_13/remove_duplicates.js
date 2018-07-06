// Array: Remove Duplicates         
// Sara is looking to hire an awesome web developer and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.
// [1,2,3,3,4]
// [1,2,3,4]
// [1,2,3,3,3,3,4]
// [1,2,3,4]

function removeDuplicates1(arr){
  debugger;
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    // if newArray.indexOf(0) == -1 then 
    if(newArray.indexOf(arr[i]) == -1){
      // push the arr[i] value into the newArray
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(removeDuplicates1([1,2,3,3,4]));
console.log(removeDuplicates1([1,2,3,3,3,3,4]));
console.log(removeDuplicates1([0,1,1,2,2,2,3,4,4,4,4,4]));

function removeDuplicates2(array) {
  function removeAt(arr, idx) {
    debugger;
    let value = arr[idx];
    for (let i = idx; i < arr.length-1; i++) {
      arr[i] = arr[i+1];
    }
    arr.pop();
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      removeAt(array, i);
      i--;
    }
  }
  return array;
}
console.log(removeDuplicates2([1,2,3,3,4]));
console.log(removeDuplicates2([1,2,3,3,3,3,4]));
console.log(removeDuplicates2([0,1,1,2,2,2,3,4,4,4,4,4]));