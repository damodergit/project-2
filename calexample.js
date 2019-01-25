// promises
//calculator
function calculator(num1,num2,calctype){
  if (calctype == "add"){
    return num1+num2;
  }
  else if (calctype == "sub"){
    return num1-num2;
  }
  else if (calctype == "mul"){
    return num1*num2;
  }
  else if (calctype == "div"){
    return num1/num2;
  }
  else {
    return "not valid option"
  }
}
var res = calculator(100,100 ,"div");
console.log(res);
