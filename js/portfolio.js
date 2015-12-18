(function($){
  $(function(){

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

  }); // end of document ready
  
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
  } // end of function countUp
  
})(jQuery); // end of jQuery name space


var options = [
   {selector: '.card', offset: 0, callback: 'Materialize.fadeInImage(".card")' }
 ];
 //Materialize.scrollFire(options);