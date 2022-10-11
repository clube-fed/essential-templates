//extend bootstrap functionality to axis

$j('.navbar .ulMenu.level0').addClass('navbar-nav');
$j('.navbar-nav li').addClass('nav-item');
$j('.navbar-nav li a').addClass('nav-link');
$j('.navbar-nav .ulMenuItem.selectedItem').closest('.ulMenu').parent().addClass('selectedParent');
$j('.navbar-nav .ulMenuItem.selectedParent').closest('.ulMenu').parent().addClass('selectedGrandParent');
//JNOLFI: using .navbar selector for all [not dynamically created] and just selecting all axis nav plugin LI el [removing multiple selectors] 
$j('.navbar li.ulMenuItem').each(function() {
    //JNOLFI: removing this as it was causing failure on subnav $j(this).html($j.trim($j(this).html())); //trim the HTML
    $j(this).contents().filter(function() {
      return this.nodeType === 3 && this.nodeValue != null; // Node.TEXT_NODE
    }).wrap('<a href="#" class="nav-link"></a>');
});
$j('.navbar-nav.ulMenu.level0').find('.ulMenu').addClass('dropdown-menu').attr('role', 'menu');
$j('.dropdown-menu').parent().addClass('dropdown');
$j('.navbar-collapse .ulMenu').find('.selectedItem').addClass('active');
// identify top level nav folders 
$j('.navbar-nav .ulMenuItem.level1.dropdown').each(function () {
    if ($j(this).children('a').attr('href') == '#') {
        $j(this).addClass('isFolder');
    } else {};
});
$j('.dropdown-menu').parent().children('a').after('<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>');
$j('.dropdown.isFolder').children('a.nav-link').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
$j('.navbar-nav .ulMenuItem.level1 > a:first-of-type').wrapInner('<span class="rootLevelSpan"></span>');

$j('header .dropdown').on({
    "shown.bs.dropdown": function () {
        $j(this).attr('closable', false);
    },
    "click": function () {},
    "hide.bs.dropdown": function () {
        return $j(this).attr('closable') == 'true';
    }
});

$j('header .collapse').on({
    "show.bs.collapse": function () {
        $j('body').addClass('burgerNav-visible');
    },
    "click": function () {},
    "hide.bs.collapse": function () {
        return $j('body').removeClass('burgerNav-visible');
    },
    "hidden.bs.collapse": function () {
        return $j('.navbar-collapse').find('.open').removeClass('open');
    }
});

var everythingButTheNav = $j('*:not("header, header *")');

/*function toggleDropdown (e) {
  const _d = $j(e.target).closest('.dropdown'),
    _m = $j('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $j('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}
$j('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);*/

$j('.navbar-toggler').click(function () {
    $j('.icon-bar').toggleClass("active");
});

// TABBING THROUGH NAV ON DESKTOP
$j('.desktopNav .navbar-nav li > a.nav-link').focus(function () {
    //$j(this).parents('li.dropdown').addClass('open');
});
$j('.navbar-nav li > a.nav-link').focus(function () {
    $j(this).parents('li.dropdown').addClass('open');
    $j(this).parent().siblings('li').removeClass('open');
    $j(this).parents('li').siblings('li').removeClass('open');
    $j(this).parents('li').siblings('li').find('.open').removeClass('open');
});

// MOBILE TOGGLES
$j('li.dropdown [data-toggle=dropdown]').on('click', function (event) {
    // Avoid following the href location when clicking
    event.preventDefault();
    // Avoid having the menu to close when clicking
    event.stopPropagation();
    // Re-add .open to parent sub-menu item
    $j(this).parent().attr('closable', true);
    $j(this).parent().toggleClass('open');
    $j(this).parent().siblings().removeClass('open');
    $j(this).parents('li').siblings('li').find('.open').removeClass('open');
    // console.log("uh");
    $j(this).parent().parent().parent().siblings().find('.open').removeClass('open');
});

// END NEW STUFF


$j('header ul.level2.dropdown-menu').each(function () {
    $j(this).on('mouseenter', function (event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // Re-add .open to parent sub-menu item
        //$j(this).parent().addClass('selectedItem');
        //$j(this).parent().find("ul").parent().find("li.dropdown").addClass('selectedItem');
    });

    $j(this).on('mouseleave', function (event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // Re-add .open to parent sub-menu item

        if (!$j(this).parent().hasClass('active')) {
            $j(this).parent().removeClass('selectedItem');
        }

        //$j(this).parent().removeClass('selectedItem');

        //$j(this).parent().find("ul").parent().find("li.dropdown").addClass('selectedItem');
    });

});

var notHeaderLink = $j('a').not('.navbar-nav a');
var notHeaderInput = $j('input').not('.navbar-nav input');
var notHeaderSelect = $j('select').not('.navbar-nav select');

$j(notHeaderLink, notHeaderInput, notHeaderSelect).focus(function () {
    if ($j('.navbar-nav li.dropdown').hasClass('open')) {
        $j('.navbar-nav li.dropdown').removeClass('open');
    }
});

$j('header li.level4.active').parent('ul.level3').parent('li.level3').addClass('active');
$j('header li.level3.active').parent('ul.level2').parent('li.level2').addClass('active');
$j('header li.level2.active').parent('ul.level1').parent('li.level1').addClass('active');

$j('div:not(.left-menu) > .navbar-nav > li.dropdown:nth-last-child(-n+3) > ul.dropdown-menu li.dropdown').each(function () {
    $j(this).addClass('dropleft');
});

$j('.navbar-nav .ulMenuItem.level1 > a > .abut, .navbar-nav .ulMenuItem.level1 > a > .abut-secondary').parent('a.nav-link').addClass('has-abut');