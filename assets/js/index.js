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
    $(".owl-carousel").owlCarousel({
      loop: true,               // Infinite loop
      margin: 10,               // Space between items
      nav: true,                // Show navigation buttons
      dots: true,               // Show dots
      autoplay: true,           // Enable auto play
      autoplayTimeout: 3000,    // Auto-play every 3 seconds
      autoplayHoverPause: true, // Pause on hover
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



$('.bootstrap-datepicker input').datepicker({
  todayBtn: "linked",
  language: "fr",
  autoclose: true,
  todayHighlight: true
});



$('.clockpicker').clockpicker({
  autoclose: true
});






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



var conf_name = "djmariageparis.fr";
var conf_email = "contact@clyevents.fr";
var modal_rgpd = '<div class="modal fade" id="modal-rgpd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' +
  '        <div class="modal-dialog" role="document">' +
  '            <div class="modal-content">' +
  '                <div class="modal-body">' +
  '                  * En cochant cette case, j’accepte que mes données personnelles soient collectées et traitées par le service commercial de ' + conf_name + '.' +
  '                   Leur traitement a pour finalité de traiter votre demande spécifique.<br>' +
  '                   Les données collectées sont conservées pour la durée de nos relations commerciales + 1 an. Conformément à la loi' +
  '                   « informatique et libertés », vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier' +
  '                   auprès de notre référent à <a href="mailto:"' + conf_email + '">' + conf_email + '</a>.<br>' +
  '                   Vous disposez également d’un droit de rectification, à l’oubli, à la portabilité, de limitation ou d’opposition auprès de notre référent à ' +
  '                   <a href="mailto:' + conf_email + '">' + conf_email + '</a>.<br><br>' +
  '                   En dernier recours, vous pouvez déposer une réclamation auprès de la CNIL.' +
  '                </div>' +
  '                <div class="modal-footer">' +
  '                    <div class="form-group text-center">' +
  '                        <button type="button" class="btn btn-default btn-primary" data-dismiss="modal">Fermer</button>' +
  '                    </div>' +
  '                </div>' +
  '            </div>' +
  '        </div>' +
  '    </div>';
$(document).ready(function () {
  $(".info-rgpd label").after(function () {
    return '&nbsp;<a href="#" data-toggle="modal" data-target="#modal-rgpd"><i class="fa fa-info-circle"></i></a>' + modal_rgpd;
  });
});

new WOW().init();




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



