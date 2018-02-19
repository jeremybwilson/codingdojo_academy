PREDICT THE OUTPUT

PREDICT 1:
var message = “z”;
for (var i = 0; i < 9; i++){
  console.log(message);
}

// OUTPUT will be z (nine times)

PREDICT 2:
var condition = “true”;
if (“true” === condition) {
  console.log(bool)
} else {
  console.log(false)
}

// OUTPUT will be bool (value)

PREDICT 3:
var arr = [543, 432, [3, 2,1] ];

console.log(arr[0]);
console.log(arr[2][0]);

// OUTPUT will be -> 543  (0 index of the array)
// OUTPUT will be -> 3.   (0 index of the inner  or 2nd array index)

PREDICT 4:
var arr = [];
var x = 0;
arr.push(12);
if(x > 1){
  arr.push(x)
}
console.log(arr);

// OUTPUT will be will be 12.  
// Array gets value of 12 pushed to it before if statement

PREDICT 5:
var x = ['John', 'Poala', 'Donovan', 'PJ'];
console.log(x[0])
console.log(x[1])
console.log(x[2])

// OUTPUT of x[0] will be John
// OUTPUT of x[1] will be Poala
// OUTPUT of x[2] will be Donavan

ALGORITHM CHALLENGE

CHALLENGE 1:
// Print all values from 255-512
function printUp(){
  var arr = [];
  for(var i = 255; i < 513; i++){
    arr.push(i);
    // console.log(arr);
  }
  return arr;
}
printUp(arr);

CHALLENGE 2:
// Print all values of the array

function printArray(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
printArray(['hello','world',1,2,3]);


CHALLENGE 3:
// Print only the values of the array that are over the value of 10
function printOnlyOverValueTen(arr){
  var array = [];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] > 10){
      array.push(arr[i]);
    }
  }
  return array;
}
printOnlyOverValueTen([1,3,5,8,10,12,14,16]);

CHALLENGE 4:
// Print only the even numbers from 256 - 555
function printEven(){
}
printEven();

BONUS CHALLENGE 5:
// Print the min and max value of an array
function minMax(arr){
  var max = arr[0];
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
    if(min > arr[i]){
      min = arr[i];
    }
  }
console.log(min)
console.log(max)
}
minMax([12,14,16,18,16,14,12]);

// find and print only odd number values
function oddNumbers(array) {
  var array = [];
  for(var i = 1; i < array.length; i++){
    if(i % 2 !== 0){
      array.push(i);
    }
  }
  return array;
}
oddNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]);