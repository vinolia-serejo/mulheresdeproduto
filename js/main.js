$(document).ready(function () {

  $('.m-menu').hide();

    
    // ATIVA BOTÃO E NAV COM O SCROLL 
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

  // MENU HAMBURGUER 

  $('.responsive-menu').click(function(){
    $('.m-menu').slideToggle();
    if ($(document).scrollTop() > 200){
      $('nav').addClass('nav--bg');
    } else {
      $('nav').toggleClass('nav--bg');
    }
  })

  $('#mobile-menu-options').find('li').click(function(){
    $('.m-menu').slideUp('slow');
  })

  // VEJA MAIS 
  
  $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
  });

  $('.veja-mais').click(function () {
    $(this).toggleText('Veja Mais', 'Veja Menos');
    $('.hide-cards').slideToggle();
  })


});

// IDENTIFICAÇÃO DO MENU

(function() {
  'use strict';

  let section = document.querySelectorAll(".section");
  let sections = {};
  let i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
})();

