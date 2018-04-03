function print1to255() {
  // set arr as empty array
  var arr = [];
  // iterate through fixed values 1 to 255
  for(var index = 1; index < 256; index += 1) {
    // for each loop, push the value of i
    arr.push(index);
  }
  // return the array
  return arr;
}
// print1to255();
console.log(print1to255());