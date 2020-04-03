//kill minipage hover function
function MiniPageMouseout() {
    return false;
}

function MiniPageMouseover() {
    return false;
}

//iPad sniffer for lastest MacOS update
var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
if (IS_IPAD) {
    $j('body.page').addClass('iPad');
}


//add class to nav properties divs 
$j('ul.ulMenu').each(function () {
    $j(this).siblings('div[style="text-align:Right;"], div[style="text-align: right;"]').addClass('navProps');
});
$j("div[style*='text-align:Right'], ._Telerik_IE9 div[style*='text-align: right']").addClass('nav--editor').css({
    float: 'right',
    position: 'absolute',
    right: 0
});

//add class to photo album properties table
$j('div[id^="photoPluginWrapper"]').siblings('table').addClass('photoAlbumPropTable');

//global script box toggle
$j('.global-scripts-toggle').on('click', function () {
    $j('.global-scripts').toggleClass('minimized')
});

$j('#toggle-edits').change(function () {
    if (!this.checked) {
        //  ^
        $j('.clickToEditDiv').show();
        $j(".plgHeaderBar a:not([onclick*='PhotoGallery']) img[title='Click to edit Plugin Properties']").parentsUntil("table").show();
        $j(".plgHeaderBar a[onclick*='PhotoGallery'] img[title='Click to edit Plugin Properties']").parent().show();
        $j("img[title='Click to edit accordion properties']").parentsUntil("div").show();
        $j("img[title='Click to edit navigation properties']").parentsUntil("div").show();

    } else {
        $j('.clickToEditDiv').hide();
        $j(".plgHeaderBar a:not([onclick*='PhotoGallery']) img[title='Click to edit Plugin Properties']").parentsUntil("table").hide();
        $j(".plgHeaderBar a[onclick*='PhotoGallery'] img[title='Click to edit Plugin Properties']").parent().hide();
        $j("img[title='Click to edit accordion properties']").parentsUntil("div").hide();
        $j("img[title='Click to edit navigation properties']").parentsUntil("div").hide();
    }
});

//set main content height
function setMainContentHeight() {
    var maincontenttopbotmargins = $j('.sitewrap .mainContent').outerHeight(true) - $j('.sitewrap .mainContent').outerHeight();
    $j('.sitewrap.private.content .mainContent').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('.banner').outerHeight() - $j('footer').outerHeight() - maincontenttopbotmargins));
};
setTimeout(setMainContentHeight, 500);
