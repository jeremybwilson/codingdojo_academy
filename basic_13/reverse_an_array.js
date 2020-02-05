/* 
// Reverse a given array and print out returned array 
*/
const myArray = [2,4,6,8];

function reverse(arr){        // this method only works for a fix number of array values, eg. 4 values
  const temp = myArray[0];    // preserve the value that's about to be lost
  myArray[0] = myArray[3];    // copying the value from index 3 to index 0 -> 8 to 2
  myArray[3] = temp;          // the 2 goes where the 8 was

  const temp2 = myArray[1];   // 4
  myArray[1] = myArray[2];    // copying 6 into 4
  myArray[2] = temp2;         // the 4 goes where the 6 was

  return myArray;
  // console.log(myArray);
  // output => [8,6,4,2]
}
reverse();

function reverse1(arr){
  // code goes here
  const myArray = [];  // declare empty array variable

  for(var i = arr.length - 1; i >= 0; i--){
    myArray.push(arr[i]);
  }
  return myArray;
}
// Test cases
// console.log('The result of reverse1() is: ', reverse1(myArray));
// console.log('The result of reverse1() is: ', reverse1([10,8,6,4,2]));

const myArray2 = [2,4,5,7,6,8,10,12];

function reverse2(arr){
  // we want to swap the values for half as many times
  // as there are values in the array
  for(var i = 0; i < arr.length / 2; i++){
    let temp = myArray2[i];
    myArray2[i] = myArray2[arr.length - 1 - i];
    myArray2[arr.length - 1 - i] = temp;
  }
  return myArray2;
}
// Test cases
console.log('The result of reverse2() is: ', reverse2(myArray2));

function reverse3(arr){
  // initalize a variable to an empty array (this will hold the new reversed values)
  var newArray = [];
  // create a decrementing for loop, which starts at the last index of  the array, 
  // and finishes at the first index of the array
  for(var i = arr.length - 1; i >= 0; i--){
    // console.log(arr[i]);
    // inside of the for loop, push the value of the parameter array 
    // into the empty array you initialized at the beginning of the function
    newArray.push(arr[i]);
  }
  return newArray;
}
// Test cases
// console.log(reverse3([1, 2, 3, 4, 5]))
// ^-- this should return [5, 4, 3, 2, 1]


// Reverse the values of a provided array
function reverseArray(arr){
  // your code here
  var newArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}
// console.log('The result of reverseArray() is: ', reverseArray([1,2,3,4]));
// console.log('The result of reverseArray() is: ', reverseArray(['Code', 'Is', 'Awesome']));
