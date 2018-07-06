// Array: Swap Pairs

/*
*  Note for instructors.  
*  Looked to other students homework examples as I was not having luck figuring this out on my own.
*/

// determine whether an array is odd or even in length
// can use modulo as test of odd or even
// if odd, make sure to ignore the last value in the array
// go through array pair, by pair -- loop function can be
// incremented by +2
// for each pair, place first value in temp variable
// shift second value to first value
// declare temp = second value
// turn algorithm into a function, and call it

// Swap positions of successive pairs of values of given array.  If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Jeremy",true,42] to [true,"Jeremy",42]. 
// As with all array challenges, do this without using any built-in array methods.

function swapPairs3(array){
  console.log('Array before manipulation: ' + array);
  // let remainder = array.length % 2;
  // index equal to zero, where index is less than array length (minus the array length remainder), increment by 2 each loop
  for(let index = 0; index < (array.length - 1); index += 2){
    // assign array[index] to temp variable
    let temp = array[index];
    // console.log('Temp variable assigned to array[index] with value of: ' + temp);

    array[index] = array[index + 1];
    // console.log('Increment the array index value + 1: ' + array[index]);

    array[index + 1] = temp;
    // console.log('Array index + 1 now switched to temp value of: ' + temp);
  }
  return array;
}
console.log(swapPairs3([1,2,3]));
console.log(swapPairs3([1,2,3,4]));
console.log(swapPairs3([1,2,3,4,5]));
console.log(swapPairs3(["Jeremy",true,42]));

function swapPairs(array){
  let index = 0;
  while(array[index] && array[index + 1]){
    let temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
    index += 2;
  }
  return array;
}

// var array_vals = [1,2,3,4];     // -> [2,1,4,3]
// var array_vals2 = [1,2,3,4,5];  // -> [2,1,4,3,5]
// console.log(swapPairs([1,2,3,4]));
// console.log(swapPairs([1,2,3,4,5]));
// console.log(swapPairs(["Jeremy",true,42]));

// Array: Swap Pairs (second example)
function swapPairs2(array){
  console.log('Array before pair swapping: ');
  console.log (array);
  // determine whether an array is odd or even in length
  // can use modulo as test of odd or even
  if (array.length % 2 === 0){
  // iterate through array indexes and increment by values of 2
    for(let index = 0; index < array.length; index += 2){
      let temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
    }
  }
  else {  // else is array length is an odd number of values do this
    // iterate through array indexes up to 2nd last index value, by increments of 2
    for(let index = 0; index < array.length - 1; index += 2){ 
      let temp = array[index];
      array[index] = array[index + 1];
      array[index + 1] = temp;
    }
  }
  console.log('Array after pair swapping: ');
  return array;
}
// console.log(swapPairs2([10,11,12,13,14,15,"string",16,17]));
// console.log(swapPairs2([1,2,3,4]));
// console.log(swapPairs2([1,2,3,4,5]));
// console.log(swapPairs2(["Jeremy",true,42]));