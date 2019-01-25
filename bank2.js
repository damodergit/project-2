let user = {
   accountId :123456789,
   firstName :'damoder',
   secondName:'pendli',
   gender    :'male',
   email     :'pendlidamoder@gmial.com',
   pass      :'pass',
   ifscode   :'SBIN0067',
   branch    :'nizampet',
   city      :'hyderabad',
   state     :'telangana',
   pincode   :'500009',
   bankName  : 'Sbi',
   Avilablebal: 40000,
   widthdrawal:50000,
   fdamout    :100000,
   creditbal  :20000,
   pinchange  :1234
}
console.log(user['gender']);
//var account = accountId;
var account = prompt('enter your accountId');
if(user.accountId==account ){
  console.log('welcome to the bank login succfully');
}
else {console.log("wrong credentials");}


// //  console.log(user);
// else if (user.Avilablebal == 40000){
//   console.log('widthdrawal amout ');}

// if (user.Avilablebal >60000){
//   console.log("hghjghjgjhgjhg");

// }
// }
// else {
//   console.log('not login bank account');
// }
