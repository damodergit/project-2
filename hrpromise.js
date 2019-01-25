function performancePromise(){
  return new Promise (function(resolve,reject){
    var work ="good";
    if(work ==="good"){
      hike ={
        performance :"good"
      }
      resolve(hike);
    }else if (work==="smart") {
      hike={
      performance:"better"
    }
    resolve(hike);
    }else if (work==="over-smart") {
      hike={
      performance:"best"
    }
    resolve(hike);
    }else {
      hike={
        performance:"bad"
      }
      reject(hike);
    }
  })
}
function managerPromise(hike){
  return new Promise(function(resolve,reject){
    if(hike.performance ==="good"){
      hike.status = true;
      hike.approval ="20%";
      resolve(hike);
    }else if(hike.performance ==="better"){
      hike.status = true;
    hike.approval="25%"  ;
    resolve(hike);
    }
    else if (hike.performance ==="best") {
      hike.status = true;
      hike.approval = "33.33%"
      resolve(hike);
    }else {
      hike.status = false;
      hike.approval = "2%";
      reject(hike);
    }
  })
}
function hrPromise(hike){
  return new Promise(function(resolve,reject){
if(hike.status){
  hike.hrstatus == "ok";
  resolve(hike)
}else {
  hike.hrstatus == "not-ok";
  reject(hike)
}
  })
}
function accontantPromise(hike){
  return new Promise (function (resolve,reject){
    if(hike.hrstatus ="not-ok"){
      hike.amount =545456;
      resolve(hike)
    } else {
      hike.amount =0.00;
      reject(hike)
    }
  })
}
performancePromise().then(function(hikeResp){
// console.log(hikeResp);
return managerPromise(hikeResp);
}).then(function(hikeResp){
  // console.log(hikeResp);
  return hrPromise(hikeResp);
}).then(function(hikeResp){
  // console.log(hikeResp);
  return accontantPromise(hikeResp);
}).then(function(hikeResp){
  console.log(hikeResp);
}).catch(function(hikeResp){
console.log(hikeResp);
})
