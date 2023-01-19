// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateEl = $('#currentDay');
var boxEl = $('<hour>');
var now = dayjs().format('h');
var taskTime = $(this).data("hour")

displayDate();
setTimeColor();

$(function () { });
//I'm confused about this function up here. Is it supposed to wrap the rest of my code?

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
var saveBtnEl = $('.saveBtn');
saveBtnEl.on('click', function () {


  var valHour = $(this).data("hour"); //picks the hour when button is clicked
  var userInput = $("#hour-" + valHour).children("textarea").val().trim()
  console.log(valHour, userInput)
  
  localStorage.setItem(valHour, userInput)

})

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  function setTimeColor()
  {
    if (taskTime.isAfter(now)) {
      boxEl.addClass('future');
    } else if (taskTime.isSame(now)) {
      boxEl.addClass('present');
    }
    else if (taskTime.isBefore(now)) {
      boxEl.addClass('past')
    }
  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  localStorage.getItem(valHour, userInput)

  // TODO: Add code to display the current date in the header of the page 
  function displayDate() {
    var date = dayjs().format('MMM DD, YYYY');
    dateEl.text(date);
  }