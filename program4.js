//max b/w three nums

var a = 300555
var b = 200000010
var c = 1000


if (a > b) {
    if (a > c) {
        console.log(a)
    } else {
        console.log(c)
    }
} else {
    if (b > c) {
        console.log(b)
    } else { console.log(c) }
}



//another method using ternery op

var big = a > b ? (a > c ? a : c) : (b > c ? b : c)

console.log(big)