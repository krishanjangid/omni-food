$('document').ready(function(){
    $('.js--section-features').waypoint(function(direction) {
        if(direction=='down')
            {
                $('nav').addClass('sticky');
            }else{
                $('nav').removeClass('sticky');
            }
}, {
  offset: '60px'
});

//animation 
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn');
    },{
        offset:'55%'
    });

 $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__slideInUp');
    },{
        offset:'80%'
    });
 $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__slideInRight');
    },{
        offset:'80%'
    });
 $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__bounceInUp');
    },{
        offset:'70%'
    });
    
//smooth scroll
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1200, function() {
          // Callback after animation
          // Must change focus!
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
});


