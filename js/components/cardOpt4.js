//card option 4
$j('.card-panels.opt4 .card').each(function () {
    $j('.card-text .mpContent > a', this).append("<span class='nc-icon-outline arrows-1_circle-right-37'></span>");
    if (!$j.trim($j('.mpContent', this).html()).length) {
        $j(this).addClass('has-empty-column');
    }
    $j(this).find('.card-bg-img .mpContent').css('background-image', "url(" + $j(this).find('.card-bg-img .mpContent img').attr("src") + ")");
    $j(this).find('.card-bg-img .mpContent img').wrap("<span style='opacity:0;'></span>");
    var calloutTitle = $j.trim($j('.card-text .mpContent > *:first-child', this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img', this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
        // Element has alt attribute
    } else {
        $j('.card-bg-img .mpContent img', this).attr('alt', ImageAltText);
    }
});
