$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});


$(document).ready(function () {
  $('a').each(function () {
    var textContent = $(this).text().trim();
    $(this).attr('title', textContent);
  });
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add("navbar-active");
    nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

  $(document).ready(function(){
    $(".owl2").owlCarousel({
      loop: true,               // Infinite loop
      margin: 10,               // Space between items
      nav: true,                // Show navigation buttons
      dots: true,               // Show dots
      autoplay: true,           // Enable auto play
      autoplayTimeout: 3000,    // Auto-play every 3 seconds
      autoplayHoverPause: true, // Pause on hover
      smartSpeed: 800,  
      navText: [
        "<i class='fa fa-chevron-left'></i>", 
        "<i class='fa fa-chevron-right'></i>"
      ],
      responsive: {
        0: { items: 1 },        // 1 item for small screens
        600: { items: 2 },      // 2 items for tablets
        1000: { items: 3 }      // 3 items for desktops
      }
    });
  });

  $(document).ready(function(){
    $(".galerie-slider").owlCarousel({
      loop: true,               // Infinite loop
      margin: 10,               // Space between items
      nav: true,                // Show navigation buttons
      dots: false,               // Show dots
      autoplay: true,           // Enable auto play
      autoplayTimeout: 3000,    // Auto-play every 3 seconds
      autoplayHoverPause: true, // Pause on hover
      smartSpeed: 800,  
      navText: [
        "", 
        ""
      ],
      responsive: {
        0: { items: 1 },        // 1 item for small screens
        600: { items: 2 },      // 2 items for tablets
        1000: { items: 3 }      // 3 items for desktops
      }
    });
  });



// $('.bootstrap-datepicker input').datepicker({
//   todayBtn: "linked",
//   language: "fr",
//   autoclose: true,
//   todayHighlight: true
// });



// $('.clockpicker').clockpicker({
//   autoclose: true
// });






$(window).scroll(function () {

  if ($(document).scrollTop() > 40) {
    $(".menu").animate({
    }, 1000);
    $(".menu").addClass('menu1');
  }
  else {
    $(".menu").removeClass('menu1');
  }
});



$(document).ready(function () {
  var $lightbox = $('#lightbox');

  $('[data-target="#lightbox"]').on('click', function (event) {
    var $img = $(this).find('img'),
      src = $img.attr('src'),
      alt = $img.attr('alt'),
      css = {
        'maxWidth': $(window).width() - 100,
        'maxHeight': $(window).height() - 100
      };

    $lightbox.find('.close').addClass('hidden');
    $lightbox.find('img').attr('src', src);
    $lightbox.find('img').attr('alt', alt);
    $lightbox.find('img').css(css);
  });

  $lightbox.on('shown.bs.modal', function (e) {
    var $img = $lightbox.find('img');

    $lightbox.find('.modal-dialog').css({ 'width': $img.width() });
    $lightbox.find('.close').removeClass('hidden');
  });
});


$(document).ready(function() {
  // Select all anchor elements
  $("a").each(function() {
    // Extract the href attribute value and remove any leading/trailing spaces
    var href = $(this).attr("href").trim();

    // Remove the '{%', '%}' and spaces from the href value to get the title
    var title = href.replace(/\{%\s*|\s*%\}/g, '').trim();

    // Set the title attribute of the anchor element
    $(this).attr("title", title);
  });
});





$(window).scroll(function () {
  if ($(document).scrollTop() > 350) {
    $(".backTotop").addClass('active1');
  } else {
    $(".backTotop").removeClass('active1');
  }
});

$('a[href^="#backTotop"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top - 200
  }, 'slow');
  return false;
});

$('a[href^="#mariage"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top - 200
  }, 'slow');
  return false;
});

$('a[href^="#abs"]').click(function () {
  var the_id = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(the_id).offset().top - 200
  }, 'slow');
  return false;
});





$(document).ready(function () {
  $('.bxslider').bxSlider({
    minSlides: 1,
    auto: true,
    moveSlides: 1,
    speed: 1000,
    pause: 8000,
    maxSlides: 1,
    slideWidth: 800,
    slideMargin: 0,
    touchEnabled: true,
    controls: false,
    infiniteLoop: true,

  });
  $('.bxslider2').bxSlider({
    minSlides: 1,
    auto: true,
    moveSlides: 2,
    speed: 1000,
    pause: 4000,
    maxSlides: 3,
    slideWidth: 300,
    slideMargin: 0,
    touchEnabled: true,
    controls: true,
    infiniteLoop: true,

  });
  $('.bxslider3').bxSlider({
    minSlides: 1,
    auto: true,
    moveSlides: 2,
    speed: 1000,
    pause: 4000,
    maxSlides: 5,
    slideWidth: 300,
    slideMargin: 0,
    touchEnabled: true,
    controls: true,
    infiniteLoop: true,

  });
});



