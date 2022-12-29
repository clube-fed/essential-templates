//article option 3
$j('.articles.opt3 .newsItem').each(function () {
    var articleImageLinkURL = $j('.article-image-link-url', this).text();
    var articleSubject = $j('.article-subject', this).text();
    $j('.article-image', this).css('background-image', "url(" + $j('.article-image img', this).first().attr("src") + ")");
    $j('.article-image img', this).first().attr('alt', articleSubject);
    $j('.article-image img + img', this).attr('aria-hidden', 'true').attr('alt', '');
    if($j.trim($j('.article-image-link-url',this).html()).length) { 
        //$j('.article-wrap', this).addClass('empty-banner');
        $j('.article-wrap', this).attr( "href", articleImageLinkURL);
        $j('.article-wrap:not([href*="ceclients"]):not([href*="westwoodcountryclub.com"])', this).attr( "target", '_blank');
        $j('.article-wrap[href*=".pdf"]', this).attr( "target", '_blank');
    }
});
