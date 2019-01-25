var promisesTopass = new Promise(function (resolve, reject){
  var isPass = false;
  if (isPass){
    resolve("congaratulation your isPass");
  }
  else {
    reject("get ready for bashing");
  }
});
promisesTopass.then(function(result){
  console.log(result);
}).catch(function(result){
  console.log(result);
})
