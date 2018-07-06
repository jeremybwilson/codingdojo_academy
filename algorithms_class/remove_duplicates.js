// Array: Remove Duplicates:
// (input)
// [1,2,3,3,4]
// (expected output)
// [1,2,3,4]

function removeDuplicates(array){
  // create a loop that examines all sorted numbers
    // work from right to left check if next value
  console.log('Array length before: ' + array.length);
  // console.log('Array before: ');
  // console.log(array);
  for(let index = array.length - 1; index >= 0; index--){
    // console.log(array);
    // console.log('if array[index] === array[index - 1]');
    // console.log(array[index], array[index - 1]);
    if(array[index] === array[index - 1]){
      // check if the next value in the array is equal to the current value?
      // if so, launch a subloop that shifts i+1 over to i, and
      // console.log('true');
      for(let subIndex = index; subIndex < array.length - 1; subIndex++){
        array[subIndex] = array[subIndex + 1];
      }
      // make sure to pop to remove the last value of the array
      array.pop();
    }
  }
  console.log('Array length after: ' + array.length);
  console.log('Array after: ');
  console.log(array);
  // return array;
}
//  repeats until the end of the array
//  if not, go to the next value and repeat test

removeDuplicates([1,2,3,3,4]);
// removeDuplicates([1,2,3,3,4,5,6,7]);
// removeDuplicates([1,2,3,3,4,5,6,6,7,8,8,9,9,9]);

// remove Duplicates - Example #2

function removeDuplicates2(array) {
  console.log ("Second Exercise");
  console.log ("Start:  " + array);
  for(var x = array.length-1; x > 0; x--){
      console.log (x);
      if(array[x - 1]=== array[x]){
        console.log ("dupe found at " + "index:" +
        x +  "; value:  "+ array[x]);
        for (var y = x; y < array.length; y++){
          console.log ("innerloop: " + "index:" +
          y +  "; value:  " + array[y]);
          array[y] = array[y + 1];
          //array.pop();
        }
        array.pop();
      }
    }
  console.log("Result:  " + array); 
 }
// removeDuplicates2([0,1,2,2,2,2,2,2,2,3,4,4,5,5,6,6,7,8,9,9]);