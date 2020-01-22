// Copy last top nav item link to navbar for flex purposes
$j('header.opt4').each(function () {
    var last_nav_item_text = $j.trim($j('.navbar-nav > li:last-child > .nav-link > .rootLevelSpan', this).text());
    $j('.navbar-nav > li:last-child > .nav-link', this).clone().removeClass('.nav-link').addClass('log-link').appendTo('.navbar');
    if (last_nav_item_text == 'Login') {
        $j('a.log-link', this).text('Login');
    } else {
        $j('a.log-link', this).text('Logout');
    }
    $j('a.log-link', this).wrap("<div class='nav-log-wrap'></div>");
    $j('a.log-link', this).prepend("<span class='nc-icon-outline ui-1_lock'></span>");
});