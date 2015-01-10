jQuery(function($) {
    $(window).load(function() {

    	var isMobile = screen.width <= 640,
	    	isRetina = window.devicePixelRatio > 1;

        $('.img-lazyload').each(function() {

	      	var $this = $(this);
	      		desktopImgSrc = $this.attr('data-desktop'),
	      		mobileImgSrc = $this.attr('data-mobile'),
	      		retinaImgSrc = $this.attr('data-retina'),
	      		dataSrc = isMobile ? mobileImgSrc : 
	      					(isRetina ? retinaImgSrc :
	      						desktopImgSrc);

	      	$this.attr('data-src', dataSrc);

        });
        $('.img-lazyload').unveil(200);
    });
});
