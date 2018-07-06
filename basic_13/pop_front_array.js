// ====================================================
// popFront
// Given an array and an additional value, remove this 
// value from the front of the array. Do this without 
// using any built-in array methods. popFront(arr,val)
// ====================================================

// Remove given value at the front of the given 
// ...array, without using any built-in array methods.
// [1,2,3,4], 0 => [2,3,4]

let array_vals1 = popFront([1,2,3,4]);
function popFront(arr){
  // loop
  for(let i = arr.length - 1; i > 0; i--){
    // console.log(array);
    arr.pop(i);
  }
  // console.log(array);
  return arr;
}
// console.log('Removed:', popFront(array_vals1));


// ==============================================================================
// popFront2
// Given an array, remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().
// ==============================================================================
// remove the front.  store front in a temp variable, then move all front, 
// swap last with saved front, pop back

let array_vals2 = [1, 2, 3, 4, 5, 6];
let array_vals3 = [10,20,30,40,50];
let array_vals4 = ['Code', 'Is', 'Awesome'];

function popFront2(inputArray){
  // debugger;
  let temp_var = inputArray[0];
  for(let i = 0; i < inputArray.length - 1; i++){
      inputArray[i] = inputArray[i + 1];
  }
  // here you can swap and pop
  // inputArray[inputArray.length - 1] = temp_var;
  // return inputArray.pop();
  // or just make the length shorter and return the tempVar
  inputArray.length = inputArray.length - 1;
  return temp_var;
}
console.log('Removed:', popFront2(array_vals2));
console.log('The result of popFront2() is:', array_vals2);
console.log('Removed: ', popFront2(array_vals3));
console.log('The result of popFront2() is: ', array_vals3);
console.log('Removed: ', popFront2(array_vals4));
console.log('The result of popFront2() is: ', array_vals4);

let array_vals5 = [1, 2, 3, 4, 5, 6];
let array_vals6 = [10,20,30,40,50];
let array_vals7 = ['Code', 'Is', 'Awesome'];

function popFrontBI(inputArray){
  return inputArray.shift();
}
// console.log('Removed', popFrontBI(array_vals5));
// console.log('The result of popFrontBI() is: ', array_vals5);
// console.log('Removed: ', popFrontBI(array_vals6));
// console.log('The result of popFrontBI() is: ', array_vals6);
// console.log('Removed: ', popFrontBI(array_vals7));
// console.log('The result of popFrontBI() is: ', array_vals7);

let array_vals8 = [1, 2, 3, 4, 5, 6];
let array_vals9 = [10,20,30,40,50];
let array_vals10 = ['Code', 'Is', 'Awesome'];

popFrontES6 = (inputArray) => inputArray.shift();

// console.log('Removed', popFrontES6(array_vals4));
// console.log(array_vals4);
// console.log('Removed', popFrontES6(array_vals8));
// console.log('The result of popFrontES6() is: ', array_vals8);
// console.log('Removed: ', popFrontES6(array_vals9));
// console.log('The result of popFrontES6() is: ', array_vals9);
// console.log('Removed: ', popFrontES6(array_vals10));
// console.log('The result of popFrontES6() is: ', array_vals10);