//double the value
let first = function (value ,callback){
  callback(value*2,true);
}
let second = function (value ,callback){
  callback(value*2,false);
}
let three = function (value ,callback){
  callback(value*2,false);
}
let four = function (value, callback){
  callback(value/2, false);
}


first("raju",function(firstResult,error){
  console.log("firstResult:",firstResult);
if (!error){
  second(firstResult,function(secondResult,error){
    console.log("secondResult:",secondResult);
    if(!error){
      three(secondResult,function(threeResult,error){
        console.log("threeResult:",threeResult);
        if(!error){
          four(threeResult,function(fourResult,error){
            console.log("fourResult : ",fourResult);
          })
        }
      })
    }
  })
}
})
