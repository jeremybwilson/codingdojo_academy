// Array: Reverse         
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, 
// with existing elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice(). 
// [1,2,3,4] -> [4,3,2,1]


// Reverse the value of a given string
function reverseString1(str){
  // let newStr = str.split("").reverse().join("");
  // split the str parameter up into an array
  let splitStr = str.split("");
  // reverse and join array back into a string
  let reversedStr = splitStr.reverse().join("");
  return reversedStr;
}
console.log(reverseString1('Coding'));
console.log(reverseString1('The mastery of the Dojo'));


function reverseArray(array) {
  let x = 0;
  let y = array.length - 1;

  while (x < array.length/2 ) {
    [array[x], array[y]] = [array[y], array[x]];
    x++;
    y--;
  }
  return array;
}

// console.log('The result of reverseArray() is:', reverseArray([1,2,3,4]));
// console.log('The result of reverseArray() is:', reverseArray([-1,0,1,2,3,4,5]));
// console.log('The result of reverseArray() is:', reverseArray(['Code', 'Is', 'Awesome']));