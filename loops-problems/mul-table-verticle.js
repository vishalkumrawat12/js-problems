//7. Write a program to display the multipliaction table vertically from 1 to n.

var n= parseInt(prompt("enter a number"))
var multi=0

// for(var i=1;i<=n;i++){
//     for(var j=1; j<=10;j++){
//         multi=i*j
//         console.log()

//     }
//     console.log()
// }

for (var i = 1; i <= 10; i++) 
{
    for (var j = 1; j <= n; j++) 
    {
        if (j <= n - 1){
            multi = i*j
            console.log( "",j ,"x" ,i ,"=  " ,multi)
        }else{
            console.log("", j , "x" , i , "=  " ,multi)
        }
    }
}