// var section = document.createElement('section');
// var h1 =document.createElement('h1');
// var ul = document.createElement('ul');
// var li1 = document.createElement('li1');
// var li2 = document.createElement('li2');
console.log(document);
//console.log(document.head);
//console.log(document.body);
var sec = document.createElement('section');
//var h1 = document.createElement('h1');
document.body.appendChild(sec);
var div = document.createElement('div');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var h2 = document.createElement('h2');
var p1 = document.createElement('p1');
var inp =document.createElement('input');
var h3 = document.createElement('h3');
var p3 = document.createElement('p3');
//var h4 =document.createElement('h4');
//var p4 =document.createElement('p4');
div.setAttribute("id","container");
// div.setAttribute("class","container");
div.setAttribute("style","border : 2px solid green");
document.body.appendChild(div);
document.body.appendChild(h1);
document.body.appendChild(p);
// document.body.appendChild(h4);
// document.body.appendChild(p4);
sec.appendChild(inp);
div.appendChild(p1);
div.appendChild(h2);
h2.innerText ="this is heading 2 !";
p1.innerText ="this para 1! ";
h1.outerText = "this is heading 1 !"
div.appendChild(h3);
div.appendChild(p3);
h3.innerHTML ="<h4>this heading 3 !</h4>";
p3.innerHTML = "<p4>this is para 3 !</p4> ";
//h4.outerHTML ="<h5>this heading 4 !</h5>";
//p4.outerHTML ="this is para 4 !";
