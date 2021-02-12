//15. Write a program to calculate the factorial of a given number.


var fact=1
var n = parseInt(prompt("Enter no. to find factorial"))
for(var i=1;i<=n;i++){
    fact  *= i
}
console.log(fact)