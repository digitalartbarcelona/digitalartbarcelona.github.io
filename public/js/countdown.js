/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSirius() {
	"use strict";

	//COUNTDOWN
	$('.countdown').countdown('2015/07/01', function(event) {
     	$(this).html(event.strftime('<div class="counter-column"><span class="count-digit">%D</span><span class="count-name">dies</span></div><div class="counter-column"><span class="count-digit">%H</span><span class="count-name">hores</span> </div><div class="counter-column"><span class="count-digit">%M</span> <span class="count-name">minuts</span></div><div class="counter-column"><span class="count-digit">%S</span><span class="count-name">segons</span></div>'));
	});

	
};


/* =Document Ready Trigger
-------------------------------------------------------------- */
$(document).ready(function(){

	initializeSirius();

});
/* END ------------------------------------------------------- */

/* =Window Load Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	//SKROLLR 
    if (Modernizr.touch) {
        skrollr.init().destroy();
    } else {   
        skrollr.init({
        	forceHeight: false
        });  
    }
});





/* END ------------------------------------------------------- */