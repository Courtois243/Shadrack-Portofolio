$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });

  // Smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

/* Ce site est développé par MUGANZA MULONDA Courtois */
/* Vous pouvez me contacter sur WhatsApp via +243 978 691 998 */
/* Vous pouvez me contacter sur Facebook à l'adresse MUGANZA MULONDA Courtois */
/* Vous pouvez me contacter sur X via l'adresse @MuganzaCourtois */
/* Vous pouvez me contacter sur Télégramme via l'adresse MUGANZA MULONDA Courtois */
