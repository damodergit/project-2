"use strict"
var calculateAge = function (name,yearOfBrith){
    var age = (yearOfBrith< 2019) ? 2019-yearOfBrith 0;
  var age = 2019-yearOfBrith;
  return {
    name:name,age:age
  };
}
let retrementAge = function(name,yearOfBrith){
  var user= calculateAge(name,yearOfBrith);
  user.rAge =60 -user.age;
  return user;
}
console.log(retrementAge("raju",1990));
console.log(retrementAge("siva",2000));
