(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function fadeIn(delay, selector){ 
    setTimeout(function(){
        Materialize.fadeInImage(selector);
    }, delay)
}; 
var fadeIndelay = 50;
var options = [
   {selector: '.light-pollution', offset: 0, callback: 'fadeIn(fadeIndelay*0, ".light-pollution")' },
   {selector: '.my-task', offset: 0, callback: 'fadeIn(fadeIndelay*1, ".my-task")' },
   {selector: '.the-fridge', offset: 0, callback: 'fadeIn(fadeIndelay*2, ".the-fridge")' },
   {selector: '.elearning', offset: 0, callback: 'fadeIn(fadeIndelay*3, ".elearning")' },
   {selector: '.bite-or-swipe', offset: 0, callback: 'fadeIn(fadeIndelay*4, ".bite-or-swipe")' },
   {selector: '.ui-pattern', offset: 0, callback: 'fadeIn(fadeIndelay*5, ".ui-pattern")' },
   
   

 ];
 Materialize.scrollFire(options);