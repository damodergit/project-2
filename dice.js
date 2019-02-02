


var face0=new Image();
var face1=new Image();
var face2=new Image();
var face3=new Image();
var face4=new Image();
var face5=new Image();
<img src="d1.gif" name="mydice">
function throwdice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["mydice"].src=eval("face"+randomdice+".src");
}
console.log("hi");
