//3. Write a program to display n terms of natural number and their sum.

var n = parseInt(prompt("Enter a number"))
var sum=0
for(var i=0; i<=n; i++){
    
    console.log(i)
    sum+=i
}
console.log(sum)
