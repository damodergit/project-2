var section = document.createElement('section');
var div = document.createElement('div')
var h1 = document.createElement('h1');
var p1 =document.createElement('p');
section.setAttribute("class", "container");
section.appendChild(div);
div.appendChild(h1);
section.appendChild(p1);
h1.innerText = "my head 1! ";
p1.innerText = " this is my para !"
document.body.appendChild(section);

let head1 = document.querySelector('p');
// let head1 = document.querySelector('hsecton');
// let head1 = document.querySelector('body');
console.log(head1);
console.log(document);
