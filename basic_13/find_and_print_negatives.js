function findNegs(arr){
  var negatives = [];
  
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      negatives.push(arr[i]);
    }
  }
  // console.log(negatives);
  return negatives;
}
console.log("The negative values here are: " + findNegs([1,-2,3,-4,-5,-10]));