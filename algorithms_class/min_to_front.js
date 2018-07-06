// Array: Min to Front

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it.
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

function pushMinToFront (array) {
  // let array = [9,4,5,2,6,7,9];
  console.log ('Array before manipulation: ')
  console.log (array);
  //use loop to determine Min value
  let min_value = array[0];
  for (x = 0; x < array.length;x++) {
    if (array[x] < min_value) {
      min_value = array[x]
    }
  }
  console.log('Min value found to be: ' + min_value);
  let MinIndex = array.indexOf(min_value);
  console.log("index of the min value:   " + MinIndex);
  // hold min value as a temp variable
  // remove min value from array and shift the array
  
  function removeAt (array, index){
    //console.log ("Remove the value:" + array[index]);
    let temp = array[index];
    for (let x = index; x < array.length; x++){
      array[x] = array[x+1];
    }
    array.pop();  // popping min value off the array
    console.log('Array after min value is popped');
    console.log(array);
    //console.log (temp);
  }
  removeAt(array, MinIndex)

  //use pushfront from assignment to place min value in front
  function pushFront(array){
    //console.log(Arr);
    for(let x = array.length-1; x >= 0; x--){
      array[x+1] = array[x];
    }
    console.log('Not sure how to describe this - original array length is restored here?');
    console.log(array);

    array[0] = min_value;

    console.log('Array after popped val is pushed to front and replaces duplicate val seen above');
    console.log(array)
  }
  pushFront(array)
}
pushMinToFront([9,6,7,3,2,0,4,5,1])