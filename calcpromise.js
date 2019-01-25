var add =function(opr){
opr.addition = opr.a+opr.b;
  return opr;
}
var sub = function(opr){
opr.subtraction = opr.a-opr.b;
  return opr;
}
var mul = function(opr){
opr.multiplication = opr.a*opr.b;
  return opr;
}
var div = function(opr){
  opr.division = opr.a/opr.b;
  return opr;
}
var other = function(){
  console.log("invalid option");
}
var promiseCalc = new Promise(function(resolve,reject){
  var opration = "add"
//  var opration ="fsssf" //its give to this one go to other condition
  if(opration=="add" || opration=="sub" || opration=="mul" || opration=="div"){
    var opr ={
      a:2000,b:1000
    }
    resolve(opr);
  }else {
    reject()
  }
});
promiseCalc.then(add).then(sub).then(mul).then(div).then(function(res){
  console.log(res);
}).catch(other);
