(function($){
  $(function(){

    $('.button-collapse').sideNav({
      edge: 'right'      
    });
    
    var waypoints = $('.animated').waypoint({
      handler: function(direction) {
        var element = $(this.element);
        element.addClass(element.data('animation'));
      },
        offset: '80%'
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space


var options = [
   {selector: '.card', offset: 0, callback: 'Materialize.fadeInImage(".card")' }
 ];
 //Materialize.scrollFire(options);