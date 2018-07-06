// Week 2 Monday


function arrays2Map(arrKeys, arrValues){
  // iterate through each value of the two arrays
  // create an empty object
  let obj = {};
  let map = new Map();
  
    // on the first iteration of the loop,
    // assign a key in the object (the key should be the...
    // value of the first array)
    // assign a value in the first key ( the value should be...
    // the value of the second array)
    // obj.x = 5;  <-----   ------> obj = { x: 5};
    // obj[x] = y;
  return map

}
arrays2Map(["abc", 3, "yo"], [42, "chocolate", true]);


function split3(str, mark){
  // 
  // loop through the string and find the mark
  // when we find the mark:
  //
  //
}
split("abxcd", "x"); // ['ab', 'cd'];

// Arrs2Map
// Given two arrays, create an associative array (map) containing keys of the first, and values of the second. For 
// arr1 = ["mister", 3, "mr","apple"] and 
// arr2 = ["dobalina", 4, "bob dobalina", "bottom"], 
// return {"abc": 42, 3: "wassup", "yo": true}. 

function arrs2Map(keyArr, valArr) {
  let map = new Map();

  for (let i = 0; i < keyArr.length; i++) {
    map.set(keyArr[i], valArr[i]);
  }

  return map;
}

arr1 = ["mister", 3, "mr","apple"];
arr2 = ["dobalina", 4, "bob dobalina", "bottom"];

console.log(arrs2Map(arr1, arr2));


// InvertHash
// Create invertHash(assocArr) that converts a hash’s keys to values and values to corresponding keys. 
// Example: 
// Given {"name": "Zaphod", "numHeads": 2}, 
// Return {"Zaphod": "name", 2: "numHeads"}. 
// You will need to learn and use a JavaScript for ... in here!

function invertHash(obj) {
  const invert = {};

  for (let key in obj) {
    invert[obj[key]] = key;
  }
  return invert;
}

console.log(invertHash({"name": "Zaphod", "numHeads": 2}));
console.log(invertHash({'name': 'Smith', 'surname': 'John', 'age': 36, 'married': true, 'job': 'teacher'}));

// Join2 
// Create join2(arr) that given an array of strings, return a string with all array strings combined.
// Given [‘a’,’b’,’c’], return ‘abc’.

function join2(arr) {
  let string = '';
  for (let index of arr) {
    string += index;
  }
  return string;
}

console.log(join2(['a','b','c']));


// Split2 
// Create split2(str) that splits a string into individual strings and returns them in an array. 
// Given ‘abc’ return [‘a’,’b’,’c’].

function split2(str) {
    return Array.from(str);
}

console.log(split2('abc'));


// ReverseString
// Implement a function reverseString(str) that, given a string, will return 
// the string of the same length but with characters reversed. 
// Example: given "creature", return "erutaerc". 
// Do not use the built-in reverse() function! 

function reverseString(str) {
  let array = Array.from(str);

  function join2(arr) {
    let string = '';
    for (let index of arr) {
        string += index;
    }
    return string;
  }

  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length-(i+1)]] = [array[array.length-(i+1)], array[i]];
  }
  return join2(array);
}

console.log(reverseString('creature'));
console.log(reverseString('random string for reverse'));