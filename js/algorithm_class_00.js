
function doStuff(){
  var x = 123;
  var y ='test';
  var z = [10,11,12,13,14,15,16];
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(z[4]);
  console.log(z.length);
  console.log(z[z.length - 1]);
}

doStuff();

// for(FIRST ; SECOND ; FOURTH){
//   THIRD
// }

// for(counter = 1; counter < 3; counter++){
//   console.log("Code!");
//   console.log("The count is at " + counter);

// }

function runCounter(){
  for(counter = 1; counter < 3; counter++){
    console.log("Code!");
    console.log("The count is at " + counter);
  }
}
runCounter();

var obj = {
  a: "test",
  b: "jewi@microsoft.com",
  c: "x",
  d: [1,2,3]
}

console.log(obj);
console.log(obj.a);

x = 10;
y = 20;

if (x < y){
  console.log('X is less than Y');
}
else if (x === y) {

}
else {
  console.log('X is equal to Y');
}