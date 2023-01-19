// Display current date on header 

var dateEl = $('#currentDay');

function displayDate() {
  var date = dayjs().format('MMM DD, YYYY');
  dateEl.text(date);
}

displayDate();

//event listener on click
var saveBtnEl = $('.saveBtn');
saveBtnEl.on('click', function () {


  var valHour = $(this).data("hour"); //picks the hour when button is clicked
  var userInput = $("#hour-" + valHour).children("textarea").val().trim() // takes the value input of the user
  console.log(valHour, userInput)

  //stores the hour and the input of user in local storage
  localStorage.setItem(valHour, userInput)

})



//compares current time to the hour in which the task is made
function setTimeColor() {
  $(".time-block").each(function () {
    var taskTime = $(this).children("button").data("hour")
    var now = dayjs().hour();
    console.log(now, taskTime)

    //adds class depending on the time
    if (taskTime < now) {
      $(this).addClass('past')
    } else if (taskTime === now) {
      $(this).addClass('present');
      $(this).removeClass('past');
    }
    else {
      $(this).addClass('future')
      $(this).removeClass('past');
      $(this).removeClass('present');
    }

  })


}

setTimeColor();

// sets input of user into localStorage
$('#hour-9 textarea').val(localStorage.getItem('9'))
$('#hour-10 textarea').val(localStorage.getItem('10'))
$('#hour-11 textarea').val(localStorage.getItem('11'))
$('#hour-12 textarea').val(localStorage.getItem('12'))
$('#hour-1 textarea').val(localStorage.getItem('13'))
$('#hour-2 textarea').val(localStorage.getItem('14'))
$('#hour-3 textarea').val(localStorage.getItem('15'))
$('#hour-4 textarea').val(localStorage.getItem('16'))
$('#hour-5 textarea').val(localStorage.getItem('17'))