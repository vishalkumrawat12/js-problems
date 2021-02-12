//18. Write a program to find the sum of the series [ 1-X^2/2!+X^4/4!- .........].

var sum  =   0
var fact =   1
var   y  =   2
var   m =    0
var   a = 1
var x = parseInt(prompt("Enter the value of x ")) 

var n =  parseInt(prompt("Enter the number "))

for(var i=1;i<n;i++){
    for(var j=1;j<=y;j++){
        fact = fact*j
    }

    a = a*(-1)
    m = a * Math.pow(x,y)/fact
    sum = sum + m
    y+=2
}
console.log(sum)