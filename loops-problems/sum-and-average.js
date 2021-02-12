//4. Write a program to read 10 numbers from keyboard and find their sum and average.


var sum=0
var avg=0
for(var i=1; i<=10;i++){
    var a = parseInt(prompt("Enter number"))
    sum+=a
    
}
avg = (sum/10)
console.log("avg=", avg)
console.log("Sum=",sum)