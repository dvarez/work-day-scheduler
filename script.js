var dateToday = moment().format("dddd, MMMM Do");
$("#currentDay").text(dateToday);

// current hour saved to a variable

var currentTime = moment().format("h");
console.log(currentTime)

// change past time to light-gray
// change current time to red
// change future time to light-green

