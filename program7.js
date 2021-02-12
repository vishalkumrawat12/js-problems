//Write a  program to check whether a number is even or odd.

var a = 11

if (a % 2 == 0) {
    console.log("Even")
} else {
    console.log("odd")
}


//by ternery op

var show = a % 2 == 0 ? "even" : "odd"
console.log("no is ", show)