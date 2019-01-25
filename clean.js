function cleanRoom (){
  return new Promise(function(resolve,reject){
    var test = "bad";
    if(test=="good"){
      clean = {
        performance :"good"
      }
        resolve(clean);
      }else if (test=="smart") {
        clean={
          performance:"better"
        }
        resolve(clean);
      }else if (test =="over-smart") {
        clean={
          performance:"best"
        }
        resolve(hike);
      }else {
        clean={
          performance:"bad"
        }
        reject(clean);
      }
  })
}
cleanRoom().then(function(cleanRes){
console.log(cleanRes);
}).catch(function(cleanRes){
  console.log(cleanRes);

})
