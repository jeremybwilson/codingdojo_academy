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

function printArray(){
  var arr = [];
  for (var i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    return arr[i];
  }
}
console.log();

function printArray(){
  var arr = [];
  for(var i = 0; i < arr.length; i++){
    arr += arr[i];
  }
  return arr;
}
console.log(printArray(['hello','world', 1,2,3]));

printArray(['hello', 'world', 1,2,3]);


CHALLENGE 3:
// Print only the values of the array that are over the value of 10
function printOnlyOverValueTen(){
  for (i < 0; i >= 10; i++) {
    console.log(i);
  }
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
// …
console.log(min)
console.log(max)
}
minMax([12,14,16,18,16,14,12]);