/**
 * theadSticky
 * written by IsdarkA
 * @autor isdarkA
 * @created Nov 5, 2013, 10:43:18 AM
 * @see https://github.com/isdarka/theadSticky
 * @version 1.0
 * 
 * Usa el thead de la tabla y lo coloca en el top cuando se desplaza hacia abajo
 * para que este siempre se encuentre visible
 * 
 * Ejemplo:
 * 
 * 	$("table").theadSticky();
 * 	$("#idTable").theadSticky();
 * 
 */
(function($){
	$.fn.extend({
		
		theadSticky: function() {
			/**
			 * Clone thead
			 */
			var clone = $("thead ",this).clone();
			
			/**
			 * th width values
			 */
			var widths = new Array();
			
			/**
			 * Position
			 */
			var theadTop = 0; 

			if(!jQuery)
				alert("theadSticky required jQuery");
			
			/**
			 * All elements
			 */
			return this.each(function() {
				
				theadTop = $(this).offset().top + $("thead", this).height();
				
				$.each($("thead tr th",this), function(index, th) {
					widths[index] = $(th).width(); 
				});
				
				$(this).prepend(clone);
				
				clone.hide();
				clone.css("z-index", 100);
				clone.find("tr").addClass("well");
				
				$(window).on("scroll", function(){
					if( $(window).scrollTop() > theadTop ) {
						clone.css({position: 'fixed', top: '0px'});
						clone.slideDown();
						
						$.each(clone.find("th"), function(index, th) {
							$(this).css("max-width", widths[index]);
							$(this).css("min-width", widths[index]);
							$(this).css("width", widths[index]);
						});
						
					}else{
						clone.css({position: 'static', top: '0px'});
						clone.hide();
					}
				});
			});
			
		}
	});
})(jQuery);