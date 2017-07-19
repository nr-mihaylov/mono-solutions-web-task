(function() {
  var langCookie = Cookies.get('lang');
  if(langCookie === undefined) var langCookie = Cookies.set('lang', 'en');
  $('.navigation__languages img').click(function(event) {
    Cookies.set('lang', $(this).attr('data-lang'));
    window.location.reload();
  });
})();
