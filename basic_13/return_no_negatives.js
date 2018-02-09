function noNeg(arr){
  // loop through array values as provided by argument
  for(var i = 0; i < arr.length; i++){
    // check to see if any values in array are less than 0
    if(arr[i] < 0){
      // if any negative array values exist, set them to 0
      arr[i] = 0
      // console.log(arr[i]);
    }
  }
  // return the array
  return arr;
}
noNeg([1,5,10,-2]);