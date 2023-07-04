document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    paddingTop: '70px'
  });
});

document.addEventListener('DOMContentLoaded', function() {

  // Rolar suavemente para a Seção 1 quando a flecha for clicada
  document.querySelector('.scroll-up').addEventListener('click', function() {
    fullpage_api.moveTo(1);
  });
});


var navLinks = document.querySelectorAll('#menu .nav-link');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    var sectionIndex = parseInt(this.getAttribute('data-index'));
    fullpage_api.moveTo(sectionIndex + 1);
  });
}


/* LINK SAIR AJUSTE CONFLITO FULLPAGE */

document.getElementById('sair-link').addEventListener('click', function() {
  window.location.href = 'index.html';
});
