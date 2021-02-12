//Write a  program to check whether a number is divisible by 5 and 11 or not.

var a = 55


if (a % 5 == 0) {
    if (a % 11 == 0) {
        console.log("yes its divisible by 5 and 11")
    } else {
        console.log("its not")
    }
} else { console.log("its not ") }


//by ternery op


var show = a % 5 == 0 ? (a % 11 == 0 ? "yes" : "not") : "not"
console.log(show)