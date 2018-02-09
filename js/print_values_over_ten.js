// print only the values over 10
function printOnlyOverValueTen(arr){
  var array = [];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] > 10){
      array.push(arr[i]);
    }
  }
  return array;
}
printOnlyOverValueTen([1,3,5,8,10,12,14,16]);