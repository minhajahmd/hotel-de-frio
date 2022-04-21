const accordionTitles = document.querySelectorAll(".accordion-title");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    const height = accordionTitle.nextElementSibling.scrollHeight;
    accordionTitle.classList.toggle("active-header");
    if (accordionTitle.classList.contains('active-header')) {
      accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
    } else {
      accordionTitle.nextElementSibling.style.maxHeight = "0px";
    }
  });
});


$(function() {
  var navbar = $('.header-inner');
  var navbar2 = $('.navbar')
  $(window).scroll(function() {
    if ($(window).scrollTop() <= 40) {
      navbar.removeClass('navbar-scroll');
      navbar2.addClass('bg-light');

    } else {
      navbar.addClass('navbar-scroll');
      navbar2.removeClass('bg-light');
    }
  });
});
