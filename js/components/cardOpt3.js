//card opt 3
$j('.card-deck.opt3 .card').each(function () {
    if (!$j.trim($j('.card-text .mpContent a', this).html()).length) {
        $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-text .mpContent a', this).attr("href");
    var callout_target = $j('.card-text .mpContent a', this).attr("target");
    var outerCalloutAnchor = $j("<a class='card-link-wrap'></a>").attr("href", callout_href).attr("target", callout_target);
    $j(this).wrapInner(outerCalloutAnchor);
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-txt'></div></div>");
    $j(this).find('.card-bg-img').css('background-image', "url(" + $j(this).find('.card-bg-img .mpContent img').attr("src") + ")");
    var calloutTitle = $j.trim($j('.card-text .mpContent', this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img', this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
        // Element has alt attribute
    } else {
        $j('.card-bg-img .mpContent img', this).attr('alt', ImageAltText);
    }
    if (!$j.trim($j('.card-bg-img .mpContent', this).html()).length) {
        $j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-text', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    $j(this).find('.card-text .mpContent a').contents().unwrap();
});