// ====================================================
// PushFront
// Given an array and an additional value, insert this 
// value at the beginning of the array. Do this without 
// using any built-in array methods. PushFront(arr,val)
// ====================================================

// Insert a given value at the beginning of the given 
// ...array, without using any built-in array methods.
// [1,2,3,4] 9 => [9,1,2,3,4]

function pushFront1(arr, frontVal){
  debugger;
  const newArray = [frontVal];
  // loop/iterate through the array
  for (var i = 0; i < arr.length; i++){
    newArray[i + 1] = arr[i];
    // newArray[0 + 1] = arr[0] => newArray[1 + 1] => arr[1] = > newArray[2 + 1] = arr[2]
  }
  // [ frontVal, 1, 2, 3, 4 ]
  return newArray;
}
let arrArgumentValues1 = pushFront1([1,2,3,4], 9);
console.log('The result of pushFront1() is: ', arrArgumentValues1);
console.log('The result of pushFront1() is: ', pushFront1([1,2,3,4], 5));
console.log('The result of pushFront1() is: ', pushFront1(['Code', 'Is', 'Awesome'], 'Indeed!'));


// use length property to shift values at current index 
// to index + 1 then just swap in the first

// ES5 no built ins
function pushFront2(inputArray, frontVal){
  debugger;
  // loop
  for(let i = inputArray.length; i >= 0; i -= 1){
    inputArray[i] = inputArray[i - 1]
  }
  // [ 11, 22, 33, 44, 55 ] => [ 11, 11, 22, 33, 44, 55]
  inputArray[0] = frontVal;
  // [ frontVal, 11, 22, 33, 44, 55 ]
  return inputArray;
}
let arrArgumentValues2 = pushFront2([11, 22, 33, 44, 55], 0);
console.log('The result of pushFront2() is: ', arrArgumentValues2);
console.log('The result of pushFront2() is: ', pushFront2([1,2,3,4], 5));
console.log('The result of pushFront2() is: ', pushFront2(['Code', 'Is', 'Awesome'], 'Indeed!'));


// ES5 built in
function pushFrontBI(inputArray, frontVal){
  inputArray.unshift(frontVal);
  return inputArray;
}

// setting inputArray to the inArr.unshift will return a value = new length.
console.log('The result of pushFrontBI() is: ', pushFrontBI([11, 22, 33], 0));
console.log('The result of pushFrontBI() is: ', pushFrontBI([1,2,3,4], 5));
console.log('The result of pushFrontBI() is: ', pushFrontBI(['Code', 'Is', 'Awesome'], 'Indeed!'));

// ES6 
pushFrontES6 = (inputArray, frontVal) => {
    inputArray.unshift(frontVal);
    return inputArray
}
// or if you try to just return the array, you'll get length (so no fancy one liner...)

console.log('The result of pushFrontES6() is: ', pushFrontES6([11, 22, 33], 0));
console.log('The result of pushFrontES6() is: ', pushFrontES6([1,2,3,4], 5));
console.log('The result of pushFrontES6() is: ', pushFrontES6(['Code', 'Is', 'Awesome'], 'Indeed!'));