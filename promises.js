let first = function (value){
  return value*2;
}
let second = function (value){
  return value*2;
}
let three = function (value){
  return value*2;
}
var prom = new prom(function(resolve,reject){
resolve(2000);
//first(2000);
});
prom.then(first).then(function(response){
  console.log(response);
})
