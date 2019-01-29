
var section = document.createElement('section');
section.setAttribute("class","container")
var ul = document.createElement('ul');
var count =3;
var input = document.createElement('input') ;

function createEmployeeList(){

// input.setAttribute("type","text");
input.setAttribute("id","ename");
input.setAttribute("name","ename");
input.setAttribute("placeholder", "Enter Employee Name/postion")
var button = document.createElement('button');
button.setAttribute("type","button");
// button.setAttribute("value", "Create NewEmployee");
button.innerText = "Create NewEmployee";
button.setAttribute("onclick", "createEmployee()");

var button1 = document.createElement('button')
button1.setAttribute("type","text");
button1.innerText = "RemoveEmployee";
button1.setAttribute("onclick","removeEmployee()");

var button2 = document.createElement('button')
button2.setAttribute("type","text");
button2.innerText = "updateEmployee";
button2.setAttribute("onclick","updateEmployee()");



var h1 =document.createElement('h1');
var li1 =document.createElement('li');
var li2 =document.createElement('li');




h1.innerText = "Employee List";
li1.innerText = "john";
li2.innerText = "mike";

section.appendChild(input);
section.appendChild(button);
section.appendChild(button1);
section.appendChild(button2);
section.appendChild(h1);
section.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
// console.log(document);
}
function createEmployee(){
  // count = 3;
  console.log("createEmployee() trigar");
  //var name = prompt("enter your name ");
  var name = document.querySelector('#ename');
  var li =document.createElement('li');
  li.setAttribute("id", "item"+count);
  //  li.innerText = "dummy text";
  //li.innerText = name;
  li.innerText = name.value;
  ul.appendChild(li);
 count+=1;
}
function removeEmployee(){
  console.log("removeEmployee() trigar");
  //var name = prompt("enter your name ");
  var position = document.querySelector('#ename');
  var li =document.querySelector('#item'+position.value);
//  li.innerText = "dummy text";
//li.innerText = name;
// li.innerText = " ";//its removing only text
li.outerHTML = " ";//its removing tag
  // ul.appendChild(li);

}

function updateEmployee(){
  console.log("updateEmployee() trigar");
  var position = +prompt ("enter position");
console.log("id:  "+position);
  //var name = prompt("enter your name ");
  var li =document.querySelector('#item'+position);

  // var position = document.getElementById('updateName');
  //var li =document.querySelector('#item'+position.value);
//  li.innerText = "dummy text";
var ename = prompt("enter new name");
console.log("position  :"+li);
li.innerHTML = ename;
// li.innerText = " ";//its removing only text
//li.outerHTML = " ";//its removing tag
  // ul.appendChild(li);

}

  document.body.appendChild (section);
