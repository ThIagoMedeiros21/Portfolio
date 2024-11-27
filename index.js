$(document).ready(function() {
  // Navegação suave para links internos
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Anima a rolagem até o link de destino
      $('body, html').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function() {
        window.location.hash = hash;
      });
    } 
  });

  // Ajuste dinâmico do tamanho da imagem de fundo na seção #middle
  var width = $(window).width();

  $(window).on('scroll', function() {
    if (width >= 900) {
      if ($(window).scrollTop() > 80) {
        $("#middle").css("background-size", "150% auto");
      } else {
        $("#middle").css("background-size", "100% auto");
      }
    }
  });

  // Animação de carregamento
  setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display", "none");
    }, 800);
  }, 1450);
});
