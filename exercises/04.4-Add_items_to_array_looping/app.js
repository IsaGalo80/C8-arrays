var arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************

for (var i=0, t=10; i<t; i++) {
    arr.push(Math.round(Math.random() * t))
}
console.log(arr);