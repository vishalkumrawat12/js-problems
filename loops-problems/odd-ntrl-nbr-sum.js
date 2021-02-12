//8. Write a program to display the n terms of odd natural number and their sum .

var n = parseInt(prompt("Enter number"))
var sum=0
console.log("odd natural no's")
for(var i=1; i<=n; i++){
    if(i%2 !=0){
        console.log(i)
        sum+=i
    }

}
console.log("sum of odd natural no. upto",n,"will be =",sum)