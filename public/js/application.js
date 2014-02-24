$(document).ready(function () {
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
//   document.getElementById('submit').focus()
//   $('form').on('submit', function(event) {
//   	event.preventDefault();
//   	$.post('/rolls', {}, function(data) {
//   		$('#die').html(data);
//   	});
//   });
// });


// Lecture 02/24/14
$(function(){
  // Add the form to the page with AJAX
  // Select the new-contact link and bind click event
  $('#new-contact').click(function(event){
    // Stop the browser from following the link
    event.preventDefault();

    // Hide the link
    $(this).hide();

    // store the href of the link
    var url = $(this).attr('href');

    // request the contact form
    $.get(url, function(serverResponse, status, request){
      //add the contact form to the page
      $('.container').append(serverResponse);
    });
  });

  // Submitting the form with AJAX
  // Select the form and bind the submission event
  $('.container').on('submit', '#contact-form', function(event){
    // Stop the browswer from submitting the form
    event.preventDefault();

    // store the location action and data from the form
    var url = $(this).attr('action');
    var data = $(this).serialize();

    // Send data to the server to create new contact
    $.post(url, data, function(serverResponse, status, request){
      // add response to the table
      $('tbody').append(serverResponse);
    });

    // remove the form from the screen
    $(this).parent('div').remove();

    // show the new-contact link
    $('#new-contact').show();
  });

});

})
