document.addEventListener('DOMContentLoaded', function() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Código existente...

  // Rolar suavemente para a Seção 1 quando a flecha for clicada
  document.querySelector('.scroll-up').addEventListener('click', function() {
    fullpage_api.moveTo(1);
  });
});