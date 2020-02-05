function doHomeWork(subject, callback){
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomeWork('math', function() {
  console.log(`Finished my homework`);
});