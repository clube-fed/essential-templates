//article option 3
$j('.articles.opt3 .newsItem').each(function () {
    var articleSubject = $j('.article-subject', this).text();
    $j('.article-image', this).css('background-image', "url(" + $j('.article-image img', this).first().attr("src") + ")");
    $j('.article-image img', this).first().attr('alt', articleSubject);
    $j('.article-image img + img', this).attr('aria-hidden', 'true').attr('alt', '');
});
