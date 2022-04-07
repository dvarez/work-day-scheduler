var dateToday = moment().format("dddd, MMMM Do");
$("#currentDay").text(dateToday);

// current hour saved to a variable

var currentTime = moment().format("H");
console.log(currentTime)

// change past time to light-gray
// change current time to red
// change future time to light-green

$(".input-group").each(function (index) {
    console.log($(this).attr("id"));

    if (parseInt($(this).attr("id")) < currentTime) {
        $(this).addClass("past")


    }

    if (parseInt($(this).attr("id")) == currentTime) {
        $(this).addClass("present")
    }


    if (parseInt($(this).attr("id")) > currentTime) {
        $(this).addClass("future")

    }



});





$( ".saveBtn" ).on( "click", function() {
    console.log( $( this ).siblings("input").val() );
    var time = $(this).parent().attr("id")
    var text = $( this ).siblings("input").val()
    localStorage.setItem(time,text)

  });