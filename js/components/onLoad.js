//Global function calls - doc ready, window load, resize
$j(document).ready(function () {

    $j('[data-toggle="offcanvas"]').click(function () {
        $j('.offcanvas').toggleClass('active');
        $j('.navbar-header').toggleClass('active');
        $j(this).toggleClass('collapsed');
        if ($j('.navbar-header').hasClass('active')) {
            $j(everythingButTheNav).attr('aria-hidden', 'true');
            $j('[data-toggle="offcanvas"]').attr('aria-label', 'click to collapse navigation');
            $j('.navbar-header .sr-only').text('menu is expanded');
            $j('.navbar-collapse a').removeAttr('tabindex');

        } else {
            $j(everythingButTheNav).removeAttr('aria-hidden');
            $j('[data-toggle="offcanvas"]').attr('aria-label', 'click to expand navigation');
            $j('.navbar-header .sr-only').text('menu is collapsed');
            $j('.navbar-collapse a').attr('tabindex', '-1');

            setTimeout(function () {
                $j('.container').focus();
            }, 20);
        }

    });
    $j().trumpTheBurger();
});

$j.fn.responsifyPhotoAlbum = function () {
    $j('div[id^="photoPluginWrapper"]').each(function () {
        $j('.banner .arrowsWrap a[class^="prevImg"]').attr('title', 'previous image');
        $j('.banner .arrowsWrap a[class^="nextImg"]').attr('title', 'next image');
        var selectedPADiv = $j('> div:not([style*="none;"])', this);
        var bwText = $j('> div:not([style*="none;"]) .bwText', this);
        var selectedPADivHeight = $j(selectedPADiv).outerHeight();
        var bwTextHeight = $j('> div:not([style*="none;"]) .bwText', this).outerHeight();
        // spaceBelowPA = if you need to create padding below photo album for content
        var spaceBelowPA = 0;
        var totalPAHeight = selectedPADivHeight + spaceBelowPA;
        var totalPAHeight = selectedPADivHeight + spaceBelowPA;
        var dotsTopPosition = ((totalPAHeight - bwTextHeight) / 2) - 4;
        $j('.photoAlbumImage').removeAttr('ondblclick');
        $j('.banner .photoAlbumImage').each(function () {
            //var photoAlbumHeading = $j(this).parent().parent().parent().siblings().children().children('h2').text();
            $j(this).attr('alt', '');
            /*if (photoAlbumHeading == '') {
                $j(this).attr('alt','');
            }else{
                $j(this).attr('alt',photoAlbumHeading);
            }*/
        });
        $j('.photoGalleryWrapDiv img.imagePreloader').each(function () {
            //var theAltText =  $j(this).parent().siblings().children().find('.photoAlbumImage').attr('alt');
            //$j(this).attr('alt',theAltText);	
            $j(this).attr('alt', '');
        });

        if (!$j(this).parent().hasClass('scroll-album')) {
            $j('> .photoGalleryWrapDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important; padding-bottom: ' + totalPAHeight + 'px !important');
        }

        if (!$j(this).parent().parent().hasClass('thumbs-album')) {
            $j('> .photoGalleryThumbPageDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important; padding-bottom: ' + totalPAHeight + 'px !important');
        }

        if ($j('div.slider-for', this).length && $j('div[onclick*="LightBox"]', this).length == 0) {
            $j('> .photoGalleryThumbPageDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important');
        }
    });
};

function aScrollResizeGallery(tag){
	var aScrollTarget = $j('[id^="photoPluginWrapper"]');
	if(tag){ aScrollTarget = $j(tag).find('[id^="photoPluginWrapper"]');}
	aScrollTarget.each(function(){
		var pHeight = 0;
		if($j(this).has('.photoGalleryThumbPageDiv[style*="z-index: 50"]').length){
			pHeight = $j(this).find('.photoGalleryThumbPageDiv[style*="z-index: 50"]').height();
		}else{
			pHeight = $j(this).find('.photoGalleryThumbPageDiv:visible').height()
		}
		$j(this).css('min-height', pHeight +"px");
	});
};

$j(window).bind("load", function () {
    resizeSitewrap();
    $j().responsifyPhotoAlbum();
    var resizeTimer = null;
    $j(window).resize(function () {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(resizeSitewrap, 10);
    });
});

$j(window).on('resize', function () {
    $j().trumpTheBurger();
    $j().responsifyPhotoAlbum();
    if ($j(window).width() > 760) {
        //$j('.offcanvas').removeClass('active');
    }
});

$j(window).on('resize', function () {
    //$j('body:not(.active) .icon-bar').removeClass('active');
    if ($j(window).width() > 768) {
        //$j('.offcanvas').removeClass('active');      
    }
});

$j('.injectContent').each(function () {
    $j(this).closest('body.page').addClass('isMobile');
});
