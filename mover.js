/**
 * @class TaraxacumOfficinaleMover
 * @author Daniel Dobkowski / daniel@danieldobkowski.com
 * @version: 1.0
 */

var TaraxacumOfficinaleMover = (function(){
	
	var opts = {
		container: jQuery('.top'), 
		movableElement: jQuery('.movable')
	}
	
	var containerPos = {
		left: opts.container.find('.cont').offset().left,
		top: opts.container.find('.cont').offset().top
	}
	
	var elPos = new Array();
	
	return {
		
		getElPos: function(el) {
			for(i=0; i<el.length; i++) {
				elPos.push(Array(el.eq(i).offset().left, el.eq(i).offset().top));
			}
		},
		
		move: function(el, container){
			this.getElPos(el);
			container.mousemove(function(event){
				var mousePos = {
					left: event.clientX-containerPos.left,
					top: event.clientY-containerPos.top
				}
				
				for(i=0; i<el.length; i++) {
					if(el.eq(i).hasClass('z1')) {
						el.eq(i).css({
							'left': elPos[i][0]+(event.clientX/500)-containerPos.left-6+'px',
							'top': elPos[i][1]+(event.clientY/500)-containerPos.top+'px'
						});
					} else if (el.eq(i).hasClass('z2')) {
						el.eq(i).css({
							'left': elPos[i][0]-(event.clientX/200)-containerPos.left-6+'px',
							'top': elPos[i][1]-(event.clientY/200)-containerPos.top+'px'
						});
					} else {
						el.eq(i).css({
							'left': elPos[i][0]+(event.clientX/80)-containerPos.left-6+'px',
							'top': elPos[i][1]+(event.clientY/80)-containerPos.top+'px'
						});
					}
				}
			});
		},
	    
	    moverOn: function(){
	    	if(!opts.movableElement.length > 0) return false;
	    	
	    	this.move(opts.movableElement, opts.container);
	
	    }
 
	}
	
})();

jQuery(document).ready(function(){
	TaraxacumOfficinaleMover.moverOn();
});
