$("#currentDay").text(moment().format('MMMM Do YYYY')); //o is the ordinal (nd)

$(".saveBtn").on('click', function(){
var time = $(this).parent().attr("id");//'this' refers to the event target (i.e. which button) that has been clicked
var desc = $(this).siblings(".description").val();
localStorage.setItem(time, desc);

});

$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));

function timeCheck(){
var currentHour = moment().hour();
//var currentHour = 12; //test for functionality. result: success

$(".time-block").each(function(){ //jquery syntax for a for loop
    var blockHour = parseInt($(this).attr("id")); //parseInt takes any string it gets and converts to integer if possible
    
    if (blockHour < currentHour){ //past
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past"); 
    } else if (currentHour === blockHour){ //present
        $(this).removeClass("past"); //order matters: wipe everything, and THEN add class, which triggers render of the dom
        $(this).removeClass("future");
        $(this).addClass("present");
    } else { //future
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
});

}


timeCheck(); //run on page open

setInterval(timeCheck, 60000); //run it every minute to update it (60k milliseconds) //add 3 0's after desired seconds
