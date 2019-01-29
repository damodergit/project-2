console.log("start");
try{
  console.log("before error");
  sdasfaff;
  console.log("after error");
}catch(error){
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

}
