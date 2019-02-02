var tot;
do{
  var sides = parseInt(prompt ("How may sides are on your die?","6"),10);
}while (isNaN(sides)) sides<1 ){


var die = {
  sides: sides,
  roll: function(){
    var randomnumber = Math.floor(Math.random() * this.sides )+ 1 ;
    return randomnumber;
  }
}
}
function printNumber (number){
  var span = document.createElement("span");
  span.className = "die";
  var diceroll = document.createTextNode(number);
  span.appendChild(diceroll);
  document.getElementById('dice').appendChild(span);
}
var button = document.getElementById('button');
botton.onclick = function (){
  var result = dice.roll();
  printNumber(result);
  var tot = result+ tot ;
  var printDiceTotal = "Total " + tot ;
  document.getElementById('diceTotal').innerHTML = printDiceTotal ;
}
