// determine whether an array is odd or even in length
// can use modulo as test of odd or even
// if odd, make sure to ignore the last value in the array
// go through array pair, by pair -- loop function can be
// incremented by +2
// for each pair, place first value in temp variable
// shift second value to first value
// declare temp = second value
// turn algorithm into a function, and call it

//deal with odd or even number arrays
//by incrementing loop and stopping at 1/2 arr.length

function reverseOrder (array) {
  console.log ('Array before reverse order manipulation: ');
  console.log (array);  
  for(let idx = 0; idx < array.length / 2; idx++){
    console.log ("idx value: " + idx);

  // for each pair, idx positions are generic at
  // array.length-1-idx and idx
  // idx=0 -> array.length-1 and 0
  // idx=1 -> array.length-1-1 and 1
  // idx=2 -> array.length-1-2 and 2
  // swap by holding on value as temp and then shifting

    let temp = array[(array.length-1)-idx];
    array[(array.length-1) - idx] = array[idx];
    array[idx] = temp;
    console.log ("temp:" + temp);
  }
  console.log ('Array after reverse order manipulation: ');
  // console.log(array);
  return array;
}
// var result = [1,2,3,4,5,6,7,8];
// console.log(reverseOrder(result));
// console.log(reverseOrder([10,8,6,4,2,0,-2,-4,-6,-8,10]));