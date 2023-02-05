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
    console.log(mensualOrAnual);
  });

  // ver planes completo
  $(".ver-todo").on("click", function () {
    $(".tf-extensible").slideToggle();
  });
});
