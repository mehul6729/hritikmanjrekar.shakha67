$(document).ready(function() {
  
    /*NAV-ANIMATION SCROLL*/
    
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
      event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
         var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
                       
     /*STICKY-NAVIGATION*/
      
          var waypoint = new Waypoint ({ 
        element: $('.js--about-me'),
        handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            }
            else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '135px;'
        
        })
    
    /*MOBILE-NAVIGATION*/
          
          
          $('.js--mobile-nav').click(function() {
              var nav =$('.jss--main-nav');
              
              nav.slideToggle(200);
              
         
          });
    
    


});
