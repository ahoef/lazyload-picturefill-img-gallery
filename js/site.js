$(document).ready(function() {

	var isMobile = screen.width <= 640,
    	isRetina = window.devicePixelRatio > 1,
    	$imgLazyload = $('.img-lazyload');

  /**
  * Attach each image's appropriate data-src attribute 
  * according to screen size
  */
  $imgLazyload.each(function() {
  	var $this = $(this),
  		desktopImgSrc = $this.attr('data-desktop'),
  		mobileImgSrc = $this.attr('data-mobile'),
  		retinaImgSrc = $this.attr('data-retina'),
  		dataSrc = isMobile ? mobileImgSrc : (isRetina ? retinaImgSrc : desktopImgSrc);

    $this.attr('data-src', dataSrc);
  });

  /**
  * Set unveil to update each image's data-src attr to its 
  * src attr, 300px before on screen
  */
  $imgLazyload.unveil(300, function() {
	  $(this).load(function() {
	    this.style.opacity = 1;
	  });
	});
		
});
