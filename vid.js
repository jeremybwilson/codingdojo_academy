function printValues(){
  // console.log('The value of a is currently: ', a);
  // console.log('The value of b is currently: ', b);
}

let a = 7;
let b = 87;
a += 5;
a *= 30;
b *= a;
printValues();

a /= 3;
b /= a;
printValues();

a *= 27;
b *= 13;
printValues();

function printNumber(num){
  console.log(50);
  console.log(num);
}
// printNumber(49);
// printNumber(13);

function printArrays(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
var arrOne = [1,2,3,4,5];
var arrTwo = [10,20,30,40,50];
var arrThree = [100,200,300,400,500];

// printArrays(arrOne);
// printArrays(arrTwo);
// printArrays(arrThree);


let thaiFood = 150;
let group = 4;

function calculateTip(bill){
  // console.log(bill * 1.2);
  return bill * 1.2;
}
var total = calculateTip(thaiFood);

// console.log('The total bill for Thai food is:', total);
// console.log('The individual bill is: ', total / group);

function multiply(a,b){
  return a * b;
}

function square(n){
  return multiply(n,n);
}

function cube(x){
  return multiply(square(x), x);
}
console.log(cube(3));
