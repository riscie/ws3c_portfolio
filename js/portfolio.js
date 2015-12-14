(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



var options = [
   {selector: '.card', offset: 0, callback: 'Materialize.fadeInImage(".card")' }
 ];
 Materialize.scrollFire(options);