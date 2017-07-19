$('#toggle').click(function(event) {
  $('.navigation__menu').toggle();
});

$('.navigation__menu-item > p').first().click(function(event) {
  var submenu = $(this).parent().find('ul').first();
  $(submenu).toggle();
  $(this).parent().toggleClass('navigation__menu-item--selected');
});
