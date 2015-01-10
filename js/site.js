jQuery(function($) {
    $(window).load(function() {

    	var isMobile = screen.width <= 640,
	    	isRetina = window.devicePixelRatio > 1;
	    	$imgLazyload = $('.img-lazyload');

        $imgLazyload.each(function() {

	      	var $this = $(this);
	      		desktopImgSrc = $this.attr('data-desktop'),
	      		mobileImgSrc = $this.attr('data-mobile'),
	      		retinaImgSrc = $this.attr('data-retina'),
	      		dataSrc = isMobile ? mobileImgSrc : 
	      					(isRetina ? retinaImgSrc :
	      						desktopImgSrc);

	      	$this.attr('data-src', dataSrc);

        });

        $imgLazyload.unveil(200, function() {
		  $(this).load(function() {
		    this.style.opacity = 1;
		  });
		});
		
    });
});
