

var arr = [4,5,734,43,45];

// Your code here, use the push function and the random function.

// var array = [];
for (var i=0, t=2; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
console.log(arr);