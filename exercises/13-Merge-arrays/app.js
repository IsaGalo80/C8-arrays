var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
   for( var i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i]);
    }
    for( var r = 0; r < secondArray.length; r++) {
        newArray.push(secondArray[r]);
     }
        return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));
