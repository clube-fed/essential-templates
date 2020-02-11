// Copy last top nav item link to navbar for flex purposes
$j('header.opt2').each(function () {
    var last_nav_item_text = $j.trim($j('.navbar-nav > li:last-child > .nav-link', this).text());
    $j('.navbar-nav > li:last-child > .nav-link', this).clone().removeClass('.nav-link').addClass('abut-secondary log-link').appendTo('.navbar');
    if (last_nav_item_text == 'Logout') {
        $j('a.log-link', this).text('Logout');
    } else {
        $j('a.log-link', this).text('Login');
    }
    $j('a.log-link', this).wrap("<div class='nav-log-wrap'></div>");
});
