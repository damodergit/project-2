var div = document.createElement('div');
div.setAttribute("class","container");
var h1 = document.createElement('h1');
var p = document.createElement('p');
// var input =document.createElement('input');
var button = document.createElement('button');
div.appendChild(h1);
div.appendChild(p);
button.setAttribute("id","registration");
//div.appendChild(input);
div.appendChild(button);
h1.innerText = "This is registration page !";
p. innerText = "welcome !! !";
button.innerText = "Registration ";
console.log(div);
document.body.appendChild(div);


var registrationForm =  function(){
  var form = document.createElement('form');
  var name = document.createElement('input');
  name.setAttribute("id","name");
  var email = document.createElement('input');
  email.setAttribute("id","email");
  var password = document.createElement('input');
  password.setAttribute("id","password");
  var sbutton = document.createElement('button')
  sbutton.innerText = "Submit";

  form.appendChild(document.createElement('br'));
  var l1 = document.createElement('label');
      l1.innerText="Name  :";
  var l2 = document.createElement('lable');
     l2.innerText="Email  :";
  var l3 = document.createElement('lable');
  l3.innerText="Pass    :";
form.appendChild(l1);
form.appendChild(name);
form.appendChild(document.createElement('br'));
form.appendChild(l2);
form.appendChild(email);
form.appendChild(document.createElement('br'));
form.appendChild(l3);
form.appendChild(password);
form.appendChild(document.createElement('br'));
form.appendChild(sbutton);
div.appendChild(form);
document.createElement('sbutton').addEventListener('click',function() {
  var name = document.getElementById('name');
  console.log(name);
});
// form.setAttribute("class","container");
//  registerUser();
}
// function  registerUser() {
//   var name = document.getElementById('name');
//   console.log(name);
// }
// registerUser();

// document.querySelector(#registration);
var registration = document.getElementById('registration');
// console.log(registration);
// element.addEventListener('trigar ', function);
// registrationForm();
registration.addEventListener('click', registrationForm);
