$j('#login-bg, .login-right').each(function () {
    if ($j.trim($j('.login-bg-img .mpContent', this).html()).length) {
        $j(this).css('background-image', "url(" + $j(this).find('.login-bg-img .mpContent').children('img').attr("src") + ")");
        $j(this).find('.login-bg-img .mpContent').children('img').attr('alt', '');
    }
});
$j('.sitewrap.login #login-bg .login-bg-img .mpContent').each(function () {
    var altAttr = $j('img', this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
        // Element has alt attribute
    } else {
        $j('img', this).attr('alt', '');
    }
});
