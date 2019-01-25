//constructor : it is function to generate dynamic object .
//it is blueprint to create object
// it is use to intilized default value .
function Trainer(name,course,passion,location){
}
function Trainer(name,course,passion,location){
this.name = name;
this.course = course;
this.passion = passion;
this.location = location;
}
let tainer = new Trainer("siva","javascript","programimg","us");
let tainer1 = new Trainer("venu","java","programimg","us");
let tainer3 = new Trainer("venu","java","programimg");
console.log(tainer);
console.log(tainer1);
console.log(tainer3);
