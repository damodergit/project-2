//function decleartion
//function functionName() {
//}
function showMsg(){
  console.log("this is function ");
}
//calling function or invoking function
showMsg();
function showMsg2(msg,name){//parametrrize function
  console.log("hai your name is :",name);
  console.log("hai your msg :",msg);
}
showMsg2("hellow","sai");
showMsg2();//there is no error becouse it show undefined
showMsg2(126668);
showMsg2("hellow","sai","extra value");//its give extra arrgument is give but there is no error becouse skip last arrgument
showMsg2(
  {text:"hewhewheh hbehjwbehge ehvehyeve u"},"sai");
