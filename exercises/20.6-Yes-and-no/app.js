let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let param = theBools;
function myFunc(param){
    if(param === 0){return "woko"}
    else if(param === 1){return "wiki"}
  }
  let result = theBools.map(myFunc);
  console.log(result);
