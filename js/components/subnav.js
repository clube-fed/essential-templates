//subnav
$j('.content .subnav').each(function () {
    if (!$j.trim($j('ul.ulMenu', this).html()).length) {
        $j(this).parents('.sidebar').addClass('emptySubnav').siblings('main.col-xs-12').removeClass('pull-right col-md-9').addClass('col-md-10 col-md-offset-1');
    }
});