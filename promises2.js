let dep1 = function (value){
  return value*2;
}
let dep2 = function (value){
  return value*2;
}
let dep3 = function (value){
  return value*2;
}
var promise = new Promise(function (resolve,reject){
  resolve(100);
  //console.log("ghfhfhgdg",result);
});
promise.then(dep1).then(dep2).then(function(response){
  console.log(response);

});
