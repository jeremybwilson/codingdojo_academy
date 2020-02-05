// Array: Swap Pairs          
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.

function swapPairs(array) {
  let i = 0;

  while (array[i] && array[i + 1]) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;

    i += 2;
  }

  return array;
}
// Test cases
// console.log(swapPairs([1,2,3,4]));
// console.log(swapPairs([1,2,3,4,5]));
// console.log(swapPairs(["Jeremy",true,42]));


// Array: Swap Pairs (second example)
function swapPairs2(array){
  // console.log('Array before pair swapping: ');
  // console.log (array);
  // determine whether an array is odd or even in length
  // can use modulo as test of odd or even
  if (array.length % 2 === 0){
  // iterate through array indexes and increment by values of 2
    for(let i = 0; i < array.length; i += 2){
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  else {  // else is array length is an odd number of values do this
    // iterate through array indexes up to 2nd last index value, by increments of 2
    for(let i = 0; i < array.length - 1; i += 2){ 
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  console.log('Array after pair swapping: ');
  return array;
}
console.log(swapPairs2([10,11,12,13,14,15,"string",16,17]));
console.log(swapPairs2([1,2,3,4]));
console.log(swapPairs2([1,2,3,4,5]));
console.log(swapPairs2(["Jeremy",true,42]));