// function to say hi depending on provided variable 
function sayHey(input){
  // let input = 0;
  // loop through the number (input) provided
  for(let i = 0; i < input; i++){
    if(input === undefined){
      // do nothing
    } else {
     console.log('Hey');
    }
  }
}
let numberOfTimes1 = 5;
console.log(sayHey(numberOfTimes1));



// function to say hi depending on provided variable 
function sayHey(input){
  let i = 0;
  // console.log(i);
  // loop through the number (input) provided
  while (i < input){
    console.log('Hey');
    i++;

  }
}
let numberOfTimes2 = 5;
console.log(sayHey(numberOfTimes2));