// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  
// If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(array){
  let hungry = true;
  let newArray;
  // iterate through the array values
  for(let i = 0; i < array.length; i++){
    // for each element equal to "food", change to yummy
    if (array[i] === 'food'){
      // foodMsg = 'food';
      console.log('yummy');
      array[i] = 'yummy';
      hungry = false;
    }
  }
  if(hungry){  // if hungry condition is true
    console.log("I\'m hungry");
  }
  // if no array elements are "food", print "I'm hungry" only once
  // return hungry ? "I'm hungry" : foodMsg;
  return array;
}
// Test cases
console.log(alwaysHungry(['food','drink','soda','food','drink']));
console.log(alwaysHungry(['rocks','air','water']));