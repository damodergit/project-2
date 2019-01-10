var user = {
  name:"malik",
  age:29,
  gender:"m",
  isActive:false,
  friends:["navee","durga","sathes"],
  family:{
    size:5,
    nmae:"hollywood",
    members:["raju","rangith","sai","mikky"]
  }
}
//  console.log("malik" in user);
  //for(key in user){
    //console.log("key:", key);
    //console.log("value : ",user[key]);
  //    console.log("value : ",user.key);
  //}
  for (index in user){
    console.log(index);
  }
