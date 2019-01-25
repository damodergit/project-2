var promisesTopass = new Promise(function (resolve,reject){
  var isPass = false;
  if(isPass){
    var result={
      pass : true,
      message:"congaratulation !"
    }
    resolve(result)
  }else {
    var result={
      pass : false,
      message:"Bahing !"
    }
    reject(result);
  }
});
promisesTopass.then(function(result){
  // console.log(result);
  return result;
}).then(function(result){
  if(result.pass){
   result.bike ={
     name:"royal enfiled",color:"black"
   }
   return result;
 }else {
   result.bike ="no bike"
   return result ;
 }
}).then(function(result){
  console.log(result);
}).catch(function (result){
  console.log(result);
});
