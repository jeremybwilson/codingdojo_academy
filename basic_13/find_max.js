
var arr = [-3,3,5,7];

function findMax(arr){
  var max = arr[0]; // something

  for(var i = 1; i < arr.length; i++){
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}
findMax(arr);
console.log(findMax(arr));