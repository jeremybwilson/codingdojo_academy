function maxCount(array){
// variable to define empty count object to store...
// ... count occurrence, eg. {number: occurrence} => {7: 4}
let counts = {};
// variable to compare stored val(s)
let compare = 0;
// variable to hold the most frequent val
var mostFrequent;
  for(var i = 0; i < data.length; i++){
    var num = array[i];  
    // find the value the occurs the most
    if(counts[num] === undefined){
      counts[num] = 1;  // set the count[num] val to 1
    } else {
      // increment the existing val
      counts[num] = counts[num] + 1;
    }

    if(counts[num] > compare){
      compare = counts[num];
      mostFrequent = data[i];
    }
  }
  // return the count that value
  return mostFrequent;
}
// Test case
var data = [1, 3, 4, 7, 7, 7, 7, 9, 9, 11, 14, 14, 14];
console.log('Here is the most frequent value: ' + maxCount(data));

