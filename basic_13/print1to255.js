function print1to255() {
  // set arr as empty array
  var arr = [];
  // iterate through fixed values 1 to 255
  for(var i = 1; i < 256; i++) {
    // for each loop, push the value of i
    arr.push(i);
  }
  // return the array
  return arr;
}
// print1to255();
console.log(print1to255());