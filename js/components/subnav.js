//subnav
$j('.content .sub-nav').each(function () {
    if (!$j.trim($j('ul.ulMenu', this).html()).length) {
        $j(this).parent().parent().removeClass('d-lg-block');
    }
});
