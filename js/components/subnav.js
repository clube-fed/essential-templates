//subnav v1
$j('.content .col-lg-3').each(function () {
    if (!$j.trim($j('.sub-nav ul.ulMenu', this).html()).length) {
        $j(this).removeClass('d-lg-block');
    }
});

//subnav v2
$j('.content .sub-nav.opt2').each(function () {
    if (!$j.trim($j('ul.ulMenu', this).html()).length) {
        $j(this).removeClass('d-lg-block');
    }
});
