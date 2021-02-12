//16. Write a program to display the n terms of even natural number and their sum.
var n=  parseInt(prompt("Enter the number"))
var sum=0

for(var i=1; i<=n; i++){
    if(i%2==0){
        console.log(i)
        sum+=i
    }
}
console.log("sum =",sum)