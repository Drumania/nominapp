var swiper = new Swiper(".swiper-logos", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  // mensual anual
  $(".time-toggle li").on("click", function () {
    $(".time-toggle li").removeClass("active");
    $(this).addClass("active");
    let mensualOrAnual = $(this).html();

    if (mensualOrAnual == "Mensual") {
      $(".tb-1 .tf-footer span").html("$0 / Mes");

      $(".tb-2 .tf-footer span").html("$59.900 / Mes");
      $(".tb-2 .tf-footer label").html("$6.900 / Persona");

      $(".tb-3 .tf-footer span").html("$59.900 / Mes");
      $(".tb-3 .tf-footer label").html("$11.900 / Mes / Persona");

      $(".tb-4 .tf-footer span").html("$399.900 / Mes");
      $(".tb-4 .tf-footer label").html("$19.900 / Persona");
    } else {
      $(".tb-1 .tf-footer span").html("$0 / Anual");

      $(".tb-2 .tf-footer span").html("$718,800 / Anual");
      $(".tb-2 .tf-footer label").html("$82.800 / Persona");

      $(".tb-3 .tf-footer span").html("$718,800 / Anual");
      $(".tb-3 .tf-footer label").html("$142,800 / Persona");

      $(".tb-4 .tf-footer span").html("$4,798,800 / Anual");
      $(".tb-4 .tf-footer label").html("$238,800 / Persona");
    }
  });

  // ver planes completo
  $(".ver-todo").on("click", function () {
    $(".tf-extensible").slideToggle();
  });
});
