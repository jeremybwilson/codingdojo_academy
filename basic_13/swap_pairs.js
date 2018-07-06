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

console.log(swapPairs([1,2,3,4]));
console.log(swapPairs([1,2,3,4,5]));
console.log(swapPairs(["Jeremy",true,42]));

// console.log(removeDuplicates2([1,2,3,3,4]));
// console.log(removeDuplicates2([1,2,3,3,3,3,4]));
// console.log(removeDuplicates2([0,1,1,2,2,2,3,4,4,4,4,4]));