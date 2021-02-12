// Write a  program to check whether a number is negative, positive or zero.

var a = -5252

if (a > 0) {
    console.log("a is a positive no.")
} else {
    if (a == 0) {
        console.log("a is zero")
    } else {
        console.log("a is negative no.")
    }
}


//another method using ternery op



var show = a > 0 ? ("positive") : (a == 0 ? "zero" : "negative")

console.log(show)