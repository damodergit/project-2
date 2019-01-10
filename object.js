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
console.log(user);
//of operator
console.log(user['name']);
console.log(user['age']);
//dot operator or perameter
console.log(user.gender);
console.log(user.friends);
console.log(user.friends[1]);
console.log(user.family.members[2]);
