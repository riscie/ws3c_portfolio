(function($){
  $(function() {
    scrollTo();
    
    $('.button-collapse').sideNav({
      edge: 'right'      
    });
    
    $('.animated').waypoint({
      handler: function(direction) {
        var element = $(this.element);
        element.addClass(element.data('animation'));
      },
        offset: '80%'
    });
    
    $('.barPercentage').waypoint({
      handler: function(direction) {
        var element = $(this.element);
        element.css("width", element.data('width') + "%");
        countUp(this.element);
        this.destroy();
      },
        offset: '90%'
    });
    
  });
  
  // counter function for skill bars
  function countUp(element) {
    $(element).prop('Counter',0).animate({
        Counter: $(element).data('width')
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(element).find('span').html(Math.ceil(now) + "%");
        }
    });
  }
  
  // Function for main menu. Scrolls to specific position
  function scrollTo() {
    $('nav a[href^=#]').on('click', function (e) { var href = $(this).attr('href'); if($(href).length) { $('html, body').animate({ scrollTop: $(href).offset().top }, 'slow'); } e.preventDefault(); });
  }
  
})(jQuery);