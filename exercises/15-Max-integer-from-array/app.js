var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];
var max = findMax(myArray);
  function findMax(myArray){
    var al = myArray.length;
    maximum = myArray[al-1];
    while (al--){
        if(myArray[al] > maximum){
            maximum = myArray[al]
        }
    }
            return maximum;
};
console.log(findMax(myArray));

function findMax(myArray) {
    return Math.max.apply(null, myArray);
  }
  console.log(findMax(myArray));