(function($){
  $(function(){

    $('.button-collapse').sideNav({
      edge: 'right'      
    });
    
    scrollTo();

  }); // end of document ready
  
  // Function for main menu. Scrolls to specific position
  function scrollTo() {
    $('a[href^=#]').on('click', function (e) { var href = $(this).attr('href'); $('html, body').animate({ scrollTop: $(href).offset().top -20 }, 'slow'); e.preventDefault(); });
  }
  
})(jQuery); // end of jQuery name space
