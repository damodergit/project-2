alert('welcome to the bank account');
let login = confirm('do you register in bank')?'yes register in bank'
                                  :'not register in bank';
                                  let firstname  =prompt('enter your firstname');
                                  let secondname =prompt('enter your secondname');
                                  let accountno  =prompt('enter your accountNo');
                                  let email      =prompt('enter your email');
                                  let reemail    =prompt('enter your reemail');
                                  let password   =prompt('enter your password');
alert('your account register succfully');
if(accountno==1234 && password==1234){
alert('your account is login succfully');
//console.log('your account is login succfully');
let accountbal = +prompt('enter your balance');
let widthdrawal = +prompt('enter your widthdrawal amount');
let creditbal   =+prompt('enter your creditbal');
console.log('creditbal :' + creditbal);
console.log('accountbal : '+ accountbal);
//console.log( $ var = totalbal{'accountbal:' + (accountbal+creditbal))};
console.log('widthdrawal :' + widthdrawal);
console.log('accountbal:' + (accountbal-widthdrawal));


let pinchange =confirm ('do you whant change pin')?'yes':'no';
            if(pinchange){
               let currentpin = +prompt("ente your 4 digit current pin");
               let newpin     = +prompt("enter your 4 digit new pin");
               let confrompin = +prompt ("enter your 4 digit confrompin");
               console.log('currentpin: ' + currentpin);
               console.log('newpin ' + newpin);
               console.log('confrompin ' + confrompin);
            }
 else {
 console.log('do not change pin number');
}

let logout = confirm('do you logout the account ')?'yes logout the account'
                                          :'not logout the account';
console.log(logout);
}
else {
  console.log('your acount not login invalid password & accountno');
}
