(function( $ ){
		$(".my-scrolldown").click(function()
		{
            $('html,body').animate({scrollTop:550}, 1000);
     	});

     	jQuery(window).on('load', function() 
     	{
  			jQuery('.preloader').fadeOut().end().delay(400).fadeOut('slow');
		});

     	let y = 0
		$(".btn-ch").click(function()
		{
			if(y == 0)
			{
				y++;
				$('.chat').css({'left' : '-2px'})
			}
			else
			{
				y = 0;
				$('.chat').css({'left' : '-300px'})
			}
		});

		$("#reload").click(function()
		{
			$(".in_mes").val('');
		});


		$("#confirm").click(function()
		{
			if($('.in_mes-nick').val().length > 0)
			{
				$('.in_mes').attr('disabled', null);
				$('.in_mes-nick').attr('disabled', 'disabled')
			}
			else
			{
				alert("Write your nickname!")
			}
		});

		$(".btn-mes").click(function()
		{
			if($('.in_mes-nick').val().length > 0){
				if($('.in_mes').val().length > 0)
				{
					
				}
				else
				{
					alert("Write a message!")
				}
			}
			else
			{
				alert("Write your nickname!")
			}
		});

		let f = 0;
		$(".Theme").click(function()
		{
			if (f == 0)
			{
				$("link[href='assets/css/theme-color/Theme.css']").attr('href', 'assets/css/theme-color/Dark_Theme.css');
				$(".Theme").css({'color' : '#1E1919', 'background-color' : 'white'});
				f++;
			}
			else
			{
				$("link[href='assets/css/theme-color/Dark_Theme.css']").attr('href', 'assets/css/theme-color/Theme.css');
				$(".Theme").css({'color' : 'white', 'background-color' : '#1E1919'});
				f = 0;
			}
			
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
	      if (jQuery(this).scrollTop() > 500) {
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
	        jQuery('#my-skills').css({ 'opacity' : '100%', 'transition' : 'all 0.8s ease' })
	      } else {
	        jQuery('#my-skills').css({ 'opacity' : '0' })
	      }
	    }); 

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 5150) {
	        jQuery('#my-test').fadeIn(600);
	      } else {
	        jQuery('#my-test').fadeOut();
	      }
	    });

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 5530) {
	        jQuery('#my-footer').fadeIn(600);
	      } else {
	        jQuery('#my-footer').fadeOut();
	      }
	    });

	    
	  
})( jQuery );



  
	