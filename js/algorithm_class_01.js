// {4a} function passed arguments from 
// {2}(and technically {1}) ---- createArrayAndReturnCreatedArray(1, 10, 1)
function createArrayAndReturnCreatedArray(loopStartValue, loopEndValue, iter){
  // define array
  var inputArray = [];
  // create a loop from {loopStartValue} to {loopEndValue}, with {iter} increments
  for(var i = loopStartValue; i <= loopEndValue; i += iter){
    // fill array
    inputArray.push(i)
  }
  //{4b} - this return "gives" an array back to the variable that calls the function - i.e. "returnedArray"
  return inputArray;
}

function invokeArrayFunctionToPrintReturnedArray(startOfArray, endCondOfArray){ //{2}
   // here, set variable to the return value of the create array function
   // makeArray here is sending a min of 1, max of 10, and iterator of 1 to the make array function above
   let returnedArray = createArrayAndReturnCreatedArray(startOfArray, endCondOfArray, 1)  // steps {3} (4 is function) then {5} for return
   // this is a console log of the array
   console.log(returnedArray); // {6}
   // currently, this function doesn't "DO" anything with this array - one could write more code below this, like loop the array for a min/max, pos/neg, then return that to the function that the point of function invocation.
}
invokeArrayFunctionToPrintReturnedArray(1, 10); //{1} - invoke function, pass parameters


function printSum0to255() {
  var arr = [];
  var sum = 0;
  for(var i = 0; i < 256; i++) {
    sum += i; 
  }
  return sum;
}
printSum0to255();
console.log(printSum0to255());


function findMinMaxAvg(arr){
  var min = arr[0]; // min
  var max = arr[0]; // max
  var sum = arr[0]; // sum

  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  var avg = sum / arr.length;  // declaring avg variable for later arrnew variable
  var arrnew = [max, min, avg]; // output results into this new array
  return arrnew;
}
// console.log(findMinMaxAvg([1,5,10,-2]));

function shiftValues(arr){
  //
  var temp = arr[0];
  //
  arr[0] = arr[arr.length - 1];
  //
  arr[arr.length - 1] = temp;
  // arr.pop(i);
  return arr;

  // console.log(arr[idx]);
  // console.log();

}
console.log(shiftValues([1,5,10,-2]));


var objectOne{
  first: [1,2,3],
  second: "Hello Universe",
  third: [{x:5, y:10, z:[11,22,33]}],
  fourth: {
    k: "nested object",
    m: [55,77,99],
    fun: function(){
      console.log("Invoked");
    }
  }
  fifth: [111, 222, [123, ["retrieve me"], 345]]
}

// Retrieve and log the string 'retrieve me' from the object
console.log(objectOne.third.x)
console.log(objectOne.third[0].x)
console.log(objectOne.['third'][0]['x'])

console.log(objectOne['third'][0].x)


var objectOne = {
   first: [1,2,3],
   second: "Hello Universe",
   third: [{x:5, y:10, z:[11,22,33]}],
   fourth: {
       k: "nested object",
       m: [55,77,99],
       fun: function(){
           console.log("Invoked");
       }
   },
   fifth: [ 111, 222, [123, [ "retrieve me!" ], 345] ]
}

// Retrieve and log the string 'retrieve me' from the object
// console.log(objectOne.third.x)
// console.log(objectOne.third[0].x)
// console.log(objectOne['third'][0].x)
// console.log(objectOne['third'][0]['x'])
// console.log(objectOne['fifth'][2][1][0]);
console.log(objectOne["fourth"]["k"]);
// objectOne.fourth.fun()


var objectTwo = {
  first: {
    a: {
      b: {
        c: {
          d: {
            key: "Value2"
          }
        }
      },
      c: {
        key: "Value1"
      }
    }
  }
}
console.log(objectTwo.first.a.b.c.d.key);

for (var x = 0; x < 5; x++){
  console.log("x: " + x);
  
  for(var y = 5; y < 10; y++){
    console.log("y: " + y);
    if(y >=10){
      break;
    }
  }
}

function nthToLast(arr, nth){
  if(nth<0){
      return null;
    } else if (nth > arr.length-1){
      return null;
    }
  return arr[arr.length-1-nth];
}
console.log(nthToLast([1,2,3,4,5], 1));
console.log(nthToLast([1,2,3,4,5], 3));
console.log(nthToLast([1,2,3,4,5], -5));


function secondLargest(arr){ 
  if(arr.length < 2){ 
    return null; 
  } 
  // [1,2] 
  // [2,1] 
  if (arr[0]>arr[1]){ 
    maxPos = 0; 
    max = arr[0]; 
    secondMax = arr[1]; 
  } else { 
      maxPos = 1; 
      max = arr[1]; 
      secondMax = arr[0]; 
  }   
  for(var idx=0; idx<arr.length; idx++){ 
    // [1,2,3,4,5] 
    if (arr[idx]> secondMax && arr[idx] < max )
      { 
        secondMax = arr[idx]; 
      } 
    if (arr[idx]> max){ 
      secondMax = max; 
      max = arr[idx]; 
    } 
  } 
  console.log("MAX: " + max); 
  console.log("Second to MAX: " + secondMax); 
} 

  secondLargest([2,1,3,5,4]); 
  secondLargest([1,2,3,4,5]); 
  secondLargest([5,4,3,2,1]); 
  secondLargest([3,2,5,4,1]);


