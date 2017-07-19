(function() {
  var gallery = document.getElementsByClassName('gallery')[0];
  if(gallery) {
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.5.7/themes/classic/galleria.classic.min.js');
    Galleria.run('.gallery');
  }
}());
