$(document).ready(function() {
  $('.click').click(function() {
    alert('hello');
  });

  $('#add').click(function() {
    var new_p = $('<p />').addClass('click').text('Click here - added');
    $('body').append(new_p);
  });

});
