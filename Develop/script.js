$("#currentDay").text(moment().format('MMMM Do YYYY')); //o is the ordinal (nd)
//jquery target; sets its text equal to the current date with the help of moment, in the format specified

$(".saveBtn").on('click', function(){ //jquery syntax for event listener
var time = $(this).parent().attr("id");//'this' refers to the event target (.saveBtn) and specifically which button that has been clicked. this prevents having to do an event listener for each button with a different id.
var desc = $(this).siblings(".description").val();
localStorage.setItem(time, desc); //saves it to local storage. key-value pairs.

});

$("#9 .description").val(localStorage.getItem('9')); //code necessary to retrieve the data from the key and its corresponding contents
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));

function timeCheck(){
var currentHour = moment().hour(); //gets the current hour with the help of moment, and then saves it in a variable that can be referenced
//var currentHour = 12; //test for functionality. result: success

$(".time-block").each(function(){ //jquery syntax for a for loop
    var blockHour = parseInt($(this).attr("id")); //parseInt takes any string it gets and converts to integer if possible. this allows it to be compared to currentHour
    
    if (blockHour < currentHour){ //check for past
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past"); 
    } else if (currentHour === blockHour){ //check for present
        $(this).removeClass("past"); //order matters: wipe everything, and THEN add the new class, which triggers render of the dom
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
