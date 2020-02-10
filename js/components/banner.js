//content page banner 
$j('.sitewrap.content .banner').each(function () {
    if (!$j.trim($j('.mpContent', this).html()).length) {
        $j(this).addClass('empty-banner');
        $j(this).parents('.sitewrap').addClass('has-empty-banner');
    }
});
$j('.sitewrap.content').each(function () {
    if (!$j(this).find('.banner').length) {
        $j(this).addClass('has-no-banner');
    }
});
$j('.content .banner:not(.empty-banner)').each(function () {
    var altAttr = $j('.mpContent img', this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
        // Element has this attribute
    } else {
        $j('.mpContent img', this).attr('alt', '');
    }
    $j(this).css('background-image', "url(" + $j(this).find('.mpContent img').attr("src") + ")");
});