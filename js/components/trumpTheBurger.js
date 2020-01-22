$j.fn.trumpTheBurger = function () {
    if ($j('.navbar').hasClass('navbar-expand-xl')) {
        var mobileNavMaxBreak = 1199;
    }
    if ($j('.navbar').hasClass('navbar-expand-lg')) {
        var mobileNavMaxBreak = 991;
    }
    if ($j('.navbar').hasClass('navbar-expand-md')) {
        var mobileNavMaxBreak = 767;
    }

    if ($j(window).width() > mobileNavMaxBreak) {
        $j('body.page').addClass('desktopNav');
        $j('body.page').removeClass('burgerNav');
        $j('header .navbar-toggle').attr('tabindex', '-1').removeAttr('aria-label');
        $j('.navbar-header .sr-only').text('');
        $j('.navbar-collapse a').removeAttr('tabindex');
    }

    if ($j(window).width() <= mobileNavMaxBreak) {
        $j('body.page').removeClass('desktopNav');
        $j('body.page').addClass('burgerNav');
        $j('header .navbar-toggle').removeAttr('tabindex').attr('aria-label', 'click to expand navigation');
        $j('.navbar-header .sr-only').text('menu is collapsed');
        $j('.navbar-collapse a').attr('tabindex', '-1');
    }

    if ($j('body.page').hasClass('isMobile desktopNav')) {
        $j('body.page').addClass('burgerNav').removeClass('desktopNav');
    }
}