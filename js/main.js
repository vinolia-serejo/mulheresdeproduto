$(document).ready(function () {

    

    $(window).scroll(function(){

        
            if ($(document).scrollTop() > 200) {
              $('nav').addClass('nav--bg');
              $('#btn-nav').fadeIn('slow');
            } else {
              $('nav').removeClass('nav--bg');
              $('#btn-nav').fadeOut('slow');
              $('#btn-nav').addClass('invisible');
            }
         

    

    })


});