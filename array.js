//object type
//1 .array  2 . object
let numbers=[20,30,40,50,60];
let family=["naveen","babu",4,true];
let names =["raju","sathesh","vamshi","srinu"];
console.log(names);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);//undefined value becouse out of range
console.log(numbers);
console.log(family);
for (var index = 0; index < names.length ; index++) {
  console.log("index :",index);
  console.log("value::",names[index]);
}
