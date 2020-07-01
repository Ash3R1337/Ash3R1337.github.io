(function( $ ){
		$(".my-scrolldown").click(function()
		{
            $('html,body').animate({scrollTop:550}, 1000);
     	});

     	jQuery(window).on('load', function() 
     	{
  		jQuery('.preloader').fadeOut().end().fadeOut('slow');
	});

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 300) {
	        jQuery('.scrollToTop').fadeIn();
	      } else {
	        jQuery('.scrollToTop').fadeOut();
	      }
	    });

	    jQuery('.scrollToTop').click(function(){
	      jQuery('html, body').animate({scrollTop : 0},800);
	      return false;
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 150) {
	        jQuery('#my-about').fadeIn(600);
	      } else {
	        jQuery('#my-about').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 650) {
	        jQuery('#my-services').fadeIn(600);
	      } else {
	        jQuery('#my-services').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 950) {
	        jQuery('#my-video').fadeIn(600);
	      } else {
	        jQuery('#my-video').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 1900) {
	        jQuery('#my-projects').fadeIn(600);
	      } else {
	        jQuery('#my-projects').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 3200) {
	        jQuery('#my-reviews').fadeIn(600);
	      } else {
	        jQuery('#my-reviews').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 4600) {
	        jQuery('#my-skills').css({ 'opacity' : '100%' })
	      } else {
	        jQuery('#my-skills').css({ 'opacity' : '0' })
	      }
	    }); 

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 5200) {
	        jQuery('#my-contact').fadeIn(600);
	      } else {
	        jQuery('#my-contact').fadeOut();
	      }
	    });
	  
})( jQuery );



  
	
