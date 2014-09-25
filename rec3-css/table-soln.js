$(document).ready(function() {
  $('div').click(function(evt) {
    var $parentTable = $(this).parents('table');

    $(this).toggleClass('active');

    if ($(this).hasClass('a')) {
      $parentTable.toggleClass('active-a');
    } else if ($(this).hasClass('b')) {
      $parentTable.toggleClass('active-b');
    } else if ($(this).hasClass('c')) {
      $parentTable.toggleClass('active-c');
    }
  });
});
