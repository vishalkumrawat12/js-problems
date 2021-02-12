//   Write a  program to check whether a year is leap year or not.


var year = 2012
if (year % 400 == 0) {
    console.log("leap year")
} else if (year % 4 == 0) {
    if (year % 100 == 0) {
        console.log("not leap year")
    }
    else { console.log("Leap year") }
}
else {
    console.log("not leap year")
}