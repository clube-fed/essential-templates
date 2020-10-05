// FIND AND REPLACE - Site CSS folder name: SiteFolderName

/*******************
lang needed for ADA
******************/
$j('html').attr('lang','en');

/*******************
global bottom objectplugin
******************/
$j('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');

$j('header img').each(function(){
    var altAttr = $j(this).attr('role');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j(this).attr('role','img');
    }
});

$j('header').each( function(){
    if($j('.header-utility-bar',this).length) { 
        $j(this).addClass('has-util-bar');
    }
});

$j(function() {
    $j('.hideNav').css("display", "flex");
    $j('.hideNav').hide();
    $j('.hideNav').fadeIn(100);
});

function MiniPageMouseout(){ return false; }
function MiniPageMouseover(){ return false; }

function handleFirstTab(e) { 
    if (e.keyCode === 9) { 
        document.body.classList.add('user-is-tabbing'); 
        window.removeEventListener('keydown', handleFirstTab); 
        window.addEventListener('mousedown', handleMouseDownOnce); 
    } 
} 
function handleMouseDownOnce() { 
    document.body.classList.remove('user-is-tabbing'); 
    window.removeEventListener('mousedown', handleMouseDownOnce); 
    window.addEventListener('keydown', handleFirstTab); 
} 
window.addEventListener('keydown', handleFirstTab);

var IS_IPAD = navigator.userAgent.match(/iPad/i) != null; 
if (IS_IPAD) {
    $j('body.page').addClass('iPad');
}

// add class to nav properties divs 
$j('ul.ulMenu').each(function() {
    $j(this).siblings('div[style="text-align:Right;"], div[style="text-align: right;"]').addClass('navProps');
});
$j("div[style*='text-align:Right'], ._Telerik_IE9 div[style*='text-align: right']").addClass('nav--editor').css({
float: 'right',
position: 'absolute',
right: 0

});

/*******************
BOOTSTRAP HELPERS
******************/
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
$j('.navbar-nav.ulMenu.level0').find('.ulMenu').addClass('dropdown-menu').attr('role','menu');
$j('.dropdown-menu').parent().addClass('dropdown');
$j('.navbar-collapse .ulMenu').find('.selectedItem').addClass('active');
$j('.dropdown-menu').parent().children('a').after('<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>');
$j('.navbar-nav .ulMenuItem.level1:not(:last-child) > a:first-of-type').wrapInner('<span class="rootLevelSpan"></span>');

// identify top level nav folders 
$j('.navbar-nav .ulMenuItem.level1.dropdown').each(function(){
    if($j(this).children('a').attr('href') == '#'){
        $j(this).addClass('isFolder');
    }else{};
});

$j('header .dropdown').on({
    "shown.bs.dropdown": function() { $j(this).attr('closable', false); },
    "click":             function() { },
    "hide.bs.dropdown":  function() { return $j(this).attr('closable') == 'true'; }
});

$j('header .collapse').on({
    "show.bs.collapse": function() { $j('body').addClass('burgerNav-visible'); },
    "click":             function() { },
    "hide.bs.collapse":  function() { return $j('body').removeClass('burgerNav-visible'); },
    "hidden.bs.collapse":  function() { return $j('.navbar-collapse').find('.open').removeClass('open');}
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

$j('.navbar-toggler').click(function(){
  $j('.icon-bar').toggleClass("active");
});

// TABBING THROUGH NAV ON DESKTOP
$j('.navbar-nav li > a.nav-link').focus(function() {
    $j(this).parents('li.dropdown').addClass('open');
    $j(this).parent().siblings('li').removeClass('open');
	$j(this).parents('li').siblings('li').removeClass('open');
    $j(this).parents('li').siblings('li').find('.open').removeClass('open');
});
  
// MOBILE TOGGLES
$j('li.dropdown [data-toggle=dropdown]').on('click', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
    // Re-add .open to parent sub-menu item
    $j(this).parent().attr('closable', true );
    $j(this).parent().toggleClass('open');
    $j(this).parent().siblings().removeClass('open');
    $j(this).parents('li').siblings('li').find('.open').removeClass('open');
});

// END NEW STUFF


$j('header ul.level2.dropdown-menu').each(function(){
$j(this).on('mouseenter', function(event) {
    // Avoid following the href location when clicking
    event.preventDefault(); 
    // Avoid having the menu to close when clicking
    event.stopPropagation(); 
    // Re-add .open to parent sub-menu item
    //$j(this).parent().addClass('selectedItem');
    //$j(this).parent().find("ul").parent().find("li.dropdown").addClass('selectedItem');
});

$j(this).on('mouseleave', function(event) {
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
	if ( $j('.navbar-nav li.dropdown').hasClass('open') ) {
		$j('.navbar-nav li.dropdown').removeClass('open'); 
	}
});

$j('header li.level4.active').parent('ul.level3').parent('li.level3').addClass('active');
$j('header li.level3.active').parent('ul.level2').parent('li.level2').addClass('active');
$j('header li.level2.active').parent('ul.level1').parent('li.level1').addClass('active');

$j('div:not(.left-menu) > .navbar-nav > li.dropdown:nth-last-child(-n+3) > ul.dropdown-menu li.dropdown').each(function(){
      $j(this).addClass('dropleft');
});

// Copy last top nav item link to navbar for flex purposes
$j('header.opt2').each(function () {
    var last_nav_item_text = $j.trim($j('.navbar-nav > li:last-child > .nav-link', this).text());
    $j('.navbar-nav > li:last-child > .nav-link', this).clone().removeClass('.nav-link').addClass('abut-secondary log-link').appendTo('.navbar');
    if (last_nav_item_text == 'Logout') {
        $j('a.log-link', this).text('Logout');
    } else if (last_nav_item_text == 'Login') {
        $j('a.log-link', this).text('Login');
    } else {
        $j('a.log-link', this).text('Member Login');
    }
    $j('a.log-link', this).wrap("<div class='nav-log-wrap'></div>");
});
$j('header.opt4').each(function(){
    var last_nav_item_text = $j.trim($j('.navbar-nav > li:last-child > .nav-link > .rootLevelSpan',this).text());
    $j('.navbar-nav > li:last-child > .nav-link', this).clone().removeClass('.nav-link').addClass('log-link').appendTo('.navbar');    
    if (last_nav_item_text == 'Login') {
        $j('a.log-link', this).text('Login');
    }
    else {
        $j('a.log-link', this).text('Logout');
    }
    $j('a.log-link', this).wrap( "<div class='nav-log-wrap'></div>" );
    $j('a.log-link', this).prepend( "<span class='nc-icon-outline ui-1_lock'></span>" );
});

/*******************
END BOOTSTRAP HELPERS
******************/

/******************* 
Begin Cards v1 
******************/
$j( '.card-deck.opt1 .card' ).each( function(){    
    if (!$j.trim($j('.card-img-overlay .mpContent a',this).html()).length){ 
	   $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-img-overlay .mpContent a',this).attr("href");
    var callout_target = $j('.card-img-overlay .mpContent a',this).attr("target");
    var outerCalloutAnchor = $j( "<a class='card-link-wrap'></a>" ).attr( "href", callout_href).attr( "target", callout_target);
    $j(this).wrapInner( outerCalloutAnchor );
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-txt'></div></div>");    
    $j(this).find('.card-bg-img').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");    
    var calloutTitle = $j.trim($j('.card-img-overlay .mpContent',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    }
    if(!$j.trim($j('.card-bg-img .mpContent',this).html()).length) { 
	$j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-img-overlay', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    $j(this).find('.card-img-overlay .mpContent a').contents().unwrap();
});
/******************* 
End Cards v1 
******************/

/******************* 
Begin Cards v2 
******************/
$j( '.card-deck.opt2 .card' ).each( function(){    
    if (!$j.trim($j('.card-img-overlay .mpContent a',this).html()).length){ 
	   $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-img-overlay .mpContent a',this).attr("href");
    var callout_target = $j('.card-img-overlay .mpContent a',this).attr("target");
    var outerCalloutAnchor = $j( "<a class='card-link-wrap'></a>" ).attr( "href", callout_href).attr( "target", callout_target);
    $j(this).wrapInner( outerCalloutAnchor );
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-txt'></div></div>");    
    $j(this).find('.card-bg-img').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");    
    var calloutTitle = $j.trim($j('.card-img-overlay .mpContent',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    }
    if(!$j.trim($j('.card-bg-img .mpContent',this).html()).length) { 
	$j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-img-overlay', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    $j(this).find('.card-img-overlay .mpContent a').contents().unwrap();
    $j(this).find('.card-img-overlay .mpContent').append("<span class='nc-icon-outline arrows-1_circle-right-37'></span>");
});
/******************* 
End Cards v2 
******************/

/******************* 
Begin Cards v3 
******************/
$j( '.card-deck.opt3 .card' ).each( function(){    
    if (!$j.trim($j('.card-text .mpContent a',this).html()).length){ 
	   $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-text .mpContent a',this).attr("href");
    var callout_target = $j('.card-text .mpContent a',this).attr("target");
    var outerCalloutAnchor = $j( "<a class='card-link-wrap'></a>" ).attr( "href", callout_href).attr( "target", callout_target);
    $j(this).wrapInner( outerCalloutAnchor );
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-txt'></div></div>");    
    $j(this).find('.card-bg-img').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");    
    var calloutTitle = $j.trim($j('.card-text .mpContent',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    }
    if(!$j.trim($j('.card-bg-img .mpContent',this).html()).length) { 
	$j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-text', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    $j(this).find('.card-text .mpContent a').contents().unwrap();
});
/******************* 
End Cards v3 
******************/

/******************* 
Begin Cards v4 
******************/
$j( '.card-panels.opt4 .card' ).each( function(){
    $j('.card-text .mpContent > a, .card-text .mpContent p a:last-child', this).append("<span class='nc-icon-outline arrows-1_circle-right-37'></span>");
    if (!$j.trim($j('.mpContent',this).html()).length) {
        $j(this).addClass('has-empty-column');
    }
    $j(this).find('.card-bg-img .mpContent').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");
    $j(this).find('.card-bg-img .mpContent img').wrap("<span style='opacity:0;'></span>");
    var calloutTitle = $j.trim($j('.card-text .mpContent > *:first-child',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    }
});
/******************* 
End Cards v4 
******************/

/******************* 
Crossmarketing panel
******************/
$j( '.crossmarketing-panel' ).each( function(){
    $j(this).append("<div class='cross-admin'><div class='cross-cte-img'></div><div class='cross-cte-txt'></div></div>"); 
    var mainImgSrc = $j(this).find('> .mpContent').children('img').attr("src");
    $j('> .mpContent',this).css('background-image', "url("+ mainImgSrc +")");
    var calloutTitle = $j.trim($j('.cross-img-overlay .mpContent',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('> .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('> .mpContent img',this).attr('alt',ImageAltText);
    }
    var imgCte = $j(this).children('.clickToEditDiv').detach();
    var txtCte = $j('.container .col-12', this).children('.clickToEditDiv').detach();
    $j(this).find('.cross-admin .cross-cte-img').append(imgCte);
    $j(this).find('.cross-admin .cross-cte-txt').append(txtCte);
    $j(this).find('.container .mpContent > a').addClass('abut-secondary');
});
/******************* 
End Crossmarketing panel 
******************/

/*******************
set login bg img
******************/
$j('.sitewrap.login #login-bg, .sitewrap.login .login-right').each (function(){
    if($j.trim($j('.login-bg-img .mpContent',this).html()).length) {
        $j(this).css('background-image', "url("+ $j(this).find('.login-bg-img .mpContent').children('img').attr("src") +")");
        $j(this).find('.login-bg-img .mpContent').children('img').attr('alt','');
    }
});
$j('.sitewrap.login #login-bg .login-bg-img .mpContent').each(function(){
    var altAttr = $j('img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('img',this).attr('alt','');
    }
});

jQuery.fn.extend({
  renameAttr: function( name, newName, removeData ) {
    var val;
    return this.each(function() {
      val = jQuery.attr( this, name );
      jQuery.attr( this, newName, val );
      jQuery.removeAttr( this, name );
      // remove original data
      if (removeData !== false){
        jQuery.removeData( this, name.replace('on','') );
      }
    });
  }
});

$adLevel = "-1";

/*******************
client request to hide certain module stuff different levels
******************/

if(!($adLevel == "3" || $adLevel == "5" || $adLevel == "9")) {
  /*$j('#axisCalendarModuleWrapper #calendarLinkBar').remove();*/
	$j('.module #articlePrintLink').hide();
}

if($adLevel == "0") {
  $j('#axisCalendarModuleWrapper #calendarLinkBar').remove();
}

/*******************
calendar plugin v1
******************/
$j('.calendar.opt1 [id$="EventsWrapper"] > div').each(function(){
    $j(this).contents().unwrap();
});    
$j('.calendar.opt1 [id$="EventsWrapper"] > a').each(function(){
    $j('.event-image', this).css('background-image', "url("+ $j('.event-image img', this).attr("src") +")");
    //var eventTitle = $j('.event-title',this).text();
    //$j( '.event-image img:first-child', this ).attr('alt',eventTitle);
    $j( '.event-image img', this ).attr('alt','');
    $j( '.event-image img + img', this ).attr('aria-hidden','true').attr('alt','');
});

/*******************
calendar plugin v2
******************/
$j('.calendar.opt2 [id$="EventsWrapper"] > div').each(function(){
    $j(this).contents().unwrap();
});  
$j('.calendar.opt2 [id$="EventsWrapper"] > a').each(function(){
    $j('.event-image', this).css('background-image', "url("+ $j('.event-image img', this).attr("src") +")");
    //var eventTitle = $j('.event-title',this).text();
    //$j( '.event-image img:first-child', this ).attr('alt',eventTitle);
    $j( '.event-image img', this ).attr('alt','');
    $j( '.event-image img + img', this ).attr('aria-hidden','true').attr('alt','');
});

/*******************
calendar plugin v3
******************/
$j('.calendar.opt3 [id$="EventsWrapper"] > div').each(function(){
    $j(this).contents().unwrap();
});
$j('.calendar.opt3 [id$="EventsWrapper"] > a').each(function(){
    $j('.event-image', this).css('background-image', "url("+ $j('.event-image img', this).attr("src") +")");
    //var eventTitle = $j('.event-title',this).text();
    //$j( '.event-image img:first-child', this ).attr('alt',eventTitle);
    $j( '.event-image img', this ).attr('alt','');
    $j( '.event-image img + img', this ).attr('aria-hidden','true').attr('alt','');
});

/*******************
calendar plugin v4
******************/
$j('.calendar.opt4 > .mpContent:first-child').each(function(){
    $j(this).css('background-image', "url("+ $j('img', this).attr("src") +")");
});

/*******************
article plugin v4
******************/
$j('.articles.opt4 .newsItem').each(function(){
    var articleSubject = $j('.article-subject', this).text();
    $j('.article-image', this).css('background-image', "url("+ $j('.article-image img', this).first().attr("src") +")");
    $j( '.article-image img', this ).first().attr('alt',articleSubject);
    $j( '.article-image img + img', this ).attr('aria-hidden','true').attr('alt','');
});

/*******************
login plugin stuff ADA
******************/
$j('.login-wrap div[id*=wrapLogin] input[type="text"], .login-wrap div[id*=wrapLogin] input[type="password"]').each(function() {
	var logInputID = $j(this).attr('id');
	var logInputVal =  $j(this).attr('value');
	$j('<label class="login-inputs_fields" />').attr('for',logInputID).css({'position': 'absolute','left':'-9999px'}).insertBefore(this);
	$j('.login-inputs_fields[for*="_txtUsername"]').text('Username');
	$j('.login-inputs_fields[for*="_txtPassword"]').text('Password');
});	

//$j('.login-wrap div[id*=wrapLogin] .abut').attr('tabindex','3');
//$j('.login-wrap div[id*=wrapLogin] .login-inputs_cookie input').attr('tabindex','4');
//$j('.login-wrap div[id*=wrapLogin] .login-inputs_forgotPassword a').attr('tabindex','5');
$j('<span>Error: </span>').prependTo('.login-wrap .errLogin');

$j('.login-wrap div[id*=wrapLogin] .errLogin:contains(username)').each(function() {
	$j('.login-wrap .advLogUsername').css({'background': 'red','color':'white'});
});

$j('.login-wrap div[id*=wrapLogin] .errLogin:contains(password)').each(function() {
	$j('.login-wrap .advLogPassword').css({'background': 'red','color':'white'});
});	

$j('#txtIeAltUsername').text('Username');
$j('#txtIeAltPassword').text('Password');
$j('.login-wrap .login-logo > a').attr('tabindex','1');	
$j('.login-wrap .advLogUsername').attr('tabindex','2');	
$j('.login-wrap .advLogPassword').attr('tabindex','3');
$j('.login-wrap .abut').attr('tabindex','4');
$j('.login-wrap .advLogRemoveChk').attr('tabindex','5');
$j('.login-wrap .login-inputs_forgotPassword a').attr('tabindex','6');
$j('.login').closest('#defaultnetform').parent('body').addClass('theActualLoginPage')
$j('.theActualLoginPage > #defaultnetform > div[id^="masterPageUC_MSTR"]').addClass('outerMasterPageWrap');
//$j('.outerMasterPageWrap footer').addClass('login-footer');
$j('.login-wrap table span a').attr('aria-label','Click here to Logout');
/*$j('.login-wrap .login-bot-r a').renameAttr('onclick', 'onkeypress' );*/

$j('a[onclick*="changeUN"]').attr('aria-label','click to open username change dialog box');
$j('a[onclick*="changePW"]').attr('aria-label','click to open password change dialog box');
$j('a[onclick*="changeUN"],a[onclick*="changePW"]').attr('role','button');

$j('.login-wrap .login-inputs_cookie span.advLogRemoveChk').focus(function() {
	//$j('.login-wrap .login-bot-l input[type="checkbox"]').focus();
	//$j('.login-wrap .login-bot-l input[type="checkbox"]').focus(function() {
		$j(this).on('keydown', function (e) {
			if (e.which == 13) {
				e.preventDefault();
				$j('.login-wrap .login-inputs_cookie input[type="checkbox"]').trigger('click');
			}
			if ((e.which == 9) && !(e.shiftKey)) {
				e.preventDefault();
				$j('.login-wrap .login-inputs_forgotPassword a').focus();
			}
		});
   //});
 });

$j('.login-wrap .login-inputs_forgotPassword a').focus(function () {
	$j(this).on('keydown', function (e) {
		if (e.which == 13) {
			e.preventDefault();
			$j(this).trigger('click');
		}
	});
});

$j('#forgotcredsModalOverlay').focusin(function () {
	$j(this).on('keydown', function (e) {
		if (e.which == 27) {
			e.preventDefault();
			$j('#forgotcredsFrameTable #AxisDialogTitleBarCloseIcon').trigger('click');
		}
	});
});

/*******************
Global function calls - doc ready, window load, resize
******************/
$j(document).ready(function () {
	
  $j('[data-toggle="offcanvas"]').click(function () {
    $j('.offcanvas').toggleClass('active');
	  $j('.navbar-header').toggleClass('active');
	$j(this).toggleClass('collapsed');
	if( $j('.navbar-header').hasClass('active') ) {
		$j(everythingButTheNav).attr('aria-hidden','true');
		$j('[data-toggle="offcanvas"]').attr('aria-label','click to collapse navigation');
		$j('.navbar-header .sr-only').text('menu is expanded');
		$j('.navbar-collapse a').removeAttr('tabindex');
		
	}else{
		$j(everythingButTheNav).removeAttr('aria-hidden');
		$j('[data-toggle="offcanvas"]').attr('aria-label','click to expand navigation');
		$j('.navbar-header .sr-only').text('menu is collapsed');
		$j('.navbar-collapse a').attr('tabindex','-1');
		
		setTimeout(function () { 
			$j('.container').focus();
		}, 20);	
	}
	
  });
	$j().trumpTheBurger();
});

$j.fn.responsifyPhotoAlbum = function () {
    $j( 'div[id^="photoPluginWrapper"]' ).each( function(){
        $j('.banner .arrowsWrap a[class^="prevImg"]').attr('title','previous image');
        $j('.banner .arrowsWrap a[class^="nextImg"]').attr('title','next image');
        var selectedPADiv = $j('> div:not([style*="none;"])', this);
        var bwText = $j('> div:not([style*="none;"]) .bwText', this);
        var selectedPADivHeight = $j(selectedPADiv).outerHeight();
        var bwTextHeight = $j('> div:not([style*="none;"]) .bwText', this).outerHeight();
        // spaceBelowPA = if you need to create padding below photo album for content
        var spaceBelowPA = 0;
        var totalPAHeight = selectedPADivHeight + spaceBelowPA;
        var totalPAHeight = selectedPADivHeight + spaceBelowPA;
        var dotsTopPosition = ((totalPAHeight - bwTextHeight)/2) - 4;
        $j('.photoAlbumImage').removeAttr('ondblclick');
        $j('.banner .photoAlbumImage').each( function(){
            //var photoAlbumHeading = $j(this).parent().parent().parent().siblings().children().children('h2').text();
                $j(this).attr('alt','');
                /*if (photoAlbumHeading == '') {
                    $j(this).attr('alt','');
                }else{
                    $j(this).attr('alt',photoAlbumHeading);
                }*/
        });
        $j('.photoGalleryWrapDiv img.imagePreloader').each( function(){
            //var theAltText =  $j(this).parent().siblings().children().find('.photoAlbumImage').attr('alt');
            //$j(this).attr('alt',theAltText);	
            $j(this).attr('alt','');
        });
        
        if (!$j(this).parent().hasClass('scroll-album')) {
            $j('> .photoGalleryWrapDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important; padding-bottom: '+ totalPAHeight +'px !important');
        }
        
        if (!$j(this).parent().parent().hasClass('thumbs-album')) {
            $j('> .photoGalleryThumbPageDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important; padding-bottom: '+ totalPAHeight +'px !important');
    }
        
        if ( $j( 'div.slider-for', this ).length && $j( 'div[onclick*="LightBox"]', this ).length == 0 ) {
            $j('> .photoGalleryThumbPageDiv', this).parent('div[id^="photoPluginWrapper"]').attr('style', 'height:0px; width:100% !important');
            }        
    });
};

$j(window).bind("load", function() {    
    resizeSitewrap();
    $j().responsifyPhotoAlbum();
    var resizeTimer = null;
    $j(window).resize(function () {
        if (resizeTimer) { clearTimeout(resizeTimer); }
        resizeTimer = setTimeout(resizeSitewrap, 10);
    });
});

$j(window).on('resize',function(){
    $j().trumpTheBurger();
    $j().responsifyPhotoAlbum();    
    if ($j(window).width() > 760) {
        //$j('.offcanvas').removeClass('active');
    }
});

$j(window).on('resize',function(){
    //$j('body:not(.active) .icon-bar').removeClass('active');
    if ($j(window).width() > 768) {
        //$j('.offcanvas').removeClass('active');      
    }
});

$j('.injectContent').each(function() {
	$j(this).closest('body.page').addClass('isMobile');
});
/*******************
End Global function calls
******************/

/*******************
global header nav function for switching desktop to mobile, adding ADA labels etc
******************/
$j.fn.trumpTheBurger = function () {
if ($j('.navbar').hasClass('navbar-expand-xl')){var mobileNavMaxBreak = 1199;}
if ($j('.navbar').hasClass('navbar-expand-lg')){var mobileNavMaxBreak = 991;}
if ($j('.navbar').hasClass('navbar-expand-md')){var mobileNavMaxBreak = 767;}
    
	if ($j(window).width() > mobileNavMaxBreak) {
		$j('body.page').addClass('desktopNav');
		$j('body.page').removeClass('burgerNav');
		$j('header .navbar-toggle').attr('tabindex','-1').removeAttr('aria-label');
		$j('.navbar-header .sr-only').text('');
		$j('.navbar-collapse a').removeAttr('tabindex');
	}
	
	if ($j(window).width() <= mobileNavMaxBreak) {
		$j('body.page').removeClass('desktopNav');
		$j('body.page').addClass('burgerNav');
		$j('header .navbar-toggle').removeAttr('tabindex').attr('aria-label','click to expand navigation');
		$j('.navbar-header .sr-only').text('menu is collapsed');
		$j('.navbar-collapse a').attr('tabindex','-1');
	}
	
	if($j('body.page').hasClass('isMobile desktopNav')){
		$j('body.page').addClass('burgerNav').removeClass('desktopNav');
	}
}

$j('div[id^="photoPluginWrapper"]').siblings('table').addClass('photoAlbumPropTable');

/*******************
ADA for tabstrip and accordion
******************/

$j('.tabstrip.RadTabStrip_Tab_responsive > .levelwrap.level1 > ul > li > a > span.wrap > span.innerWrap').each(function(){
   var ariaLinkLabel = "Click to read more about " + $j(this).text();
	$j(this).closest('a').attr({'aria-label':ariaLinkLabel,'title':ariaLinkLabel});
});

$j('.RadPanelBar_accordionTemplate a.rpLink').each(function(){
	var accordTitleText = $j(this).find('.rpText').text();
	var ariaLinkLabelExpand = "Click to toggle the accordion and read more about " + accordTitleText;
	/*$j(this).attr({'aria-label':ariaLinkLabelExpand,'title':ariaLinkLabelExpand});

	$j(this).click(function(){

		if( $j(this).hasClass('rpExpanded') ) {
			setTimeout(function () { 
				$j(this).attr({'aria-label':ariaLinkLabelExpand,'title':ariaLinkLabelExpand});
				console.log(ariaLinkLabelExpand);
			}, 1000);
		}else{
			setTimeout(function () { 
				$j(this).attr({'aria-label':ariaLinkLabelCollapse,'title':ariaLinkLabelCollapse});
				console.log(ariaLinkLabelCollapse);
			}, 1000); 
		}
	});*/

	var miniPageID = $j(this).siblings('.rpSlide').find('.mpContent').attr('id');
	var ariaIDSlide = miniPageID + "_slide";
	var ariaIDAccord = miniPageID + "_accord";
	$j(this).siblings('.rpSlide').attr({'id':ariaIDSlide,'role':'region','aria-labelledby':ariaIDAccord});
	$j(this).attr({'id':ariaIDAccord, 'aria-label':ariaLinkLabelExpand,'title':ariaLinkLabelExpand,'aria-expanded':'false','aria-controls':ariaIDSlide});
	
});	

/*******************
Resize Script 
******************/
var TIMEOUT = null;
function resizeSitewrap() {
  if($j('#adminDashboard').length && $j(window).width() > 1024 && $j('#adminDashboard').css('display') != 'none'){
    $j('.sitewrap').css('min-height', ($j(window).height()-46) + "px");
    $j('.modulewrap > .container').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('footer').outerHeight()-46));

  } else {
    $j('.sitewrap').css('min-height', $j(window).height() + "px");
      $j('.modulewrap > .container').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('footer').outerHeight()));
  };
	/******************* Resize Trigger for Photo Album's (Sets Min Height)******************/
  	aScrollResize();  	
}

/*******************
End Resize Script 
******************/

/*******************
mobile calendar search return ADA
******************/
$j('.injectContent #calendarSwitch #doSearch').click(function () {
    // Get thevalue and trim it
    var name = $j.trim($j('.injectContent #calendarSwitch #searchInput').val());
    // Check if empty of not
    if (name === '') {
        alert('No Search Criteria Specified');
        return false;
    }
});

/*******************
article stuff
******************/

$j('#articlePrintLink > a').attr({role:'button'});
$j('.editArticleLink').attr({role:'button'});
$j('body[class*=ArticleList] a[href*="_ArticleView"]').attr({role:'link'});

/*******************
icons - hide from screen readers
******************/

$j('[class*="icon "][class*="icon-"]').attr('aria-hidden','true');

$j('#adminDashboardCETab #ceDashboardColumn2 > ul:first-of-type >li.groupHeader:first-of-type > h3').text('Global');

$j( '.sitewrap' ).each( function(){
if($j('.banner [id^="photoPluginWrapper"]',this).length) { 
$j(this).addClass('hasBannerAlbum');
    }
});
$j(".banner:contains('There are no Categories or Images assigned to this album')").parents('.sitewrap').addClass('emptyBannerAlbum');

$j('html').on('click', '.banner .scroll-down', function(){    
    if($j(window).width() > 1199){
       $j('html, body').animate({
            scrollTop: '+='+($j('.banner').height() - 100 -$j(window).scrollTop())
         }, 500)
       }
       else {
       $j('html, body').animate({
            scrollTop: '+='+($j('.banner').height() + $j('header').height() -$j(window).scrollTop())
         }, 500)
       }
  });

/******************* 
ADA stuff
******************/    
$j('div[id^="photoPluginWrapper"]').siblings('table').addClass('photoAlbumPropTable');





$j('.sitewrap.content .mpContent img').each(function(){
    var altAttr = $j(this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j(this).attr('alt','');
    }
});

/******************* 
content page banner 
******************/
$j('.sitewrap.content .banner').each( function(){
    if(!$j.trim($j('.mpContent',this).html()).length) { 
        $j(this).addClass('empty-banner');
        $j(this).parents('.sitewrap').addClass('has-empty-banner');
    }
});
$j('.sitewrap.content').each( function(){
    if(!$j(this).find('.banner').length) { 
        $j(this).addClass('has-no-banner');
    }
});
$j('.content .banner:not(.empty-banner)').each(function(){
    var altAttr = $j('.mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has this attribute
    }else {
        $j('.mpContent img',this).attr('alt','');
    }
    $j(this).css('background-image', "url("+ $j(this).find('.mpContent img').attr("src") +")"); 
});

/******************* 
content page accordions and tabstrip images 
******************/

$j( '.content .rpTemplate .mpContent img:not([alt])' ).each( function(){
	var theAccordTitle = $j(this).parent().parent().parent().parent().siblings().children().find('.rpText').text();
	accordImgAltText = "Image for " + theAccordTitle + "Accordion Content";
	$j(this).attr('alt',accordImgAltText);
 });

$j( '.content .tsContent .mpContent img:not([alt])' ).each( function(){
	$j(this).attr('alt','Image for Tab Strip Content');
 });

/*******************
subnav v1
******************/
$j('.content .col-lg-3').each(function () {
    if (!$j.trim($j('.sub-nav ul.ulMenu', this).html()).length) {
        $j(this).removeClass('d-lg-block');
    }
});

/*******************
subnav v2
******************/
$j('.content .sub-nav.opt2').each(function () {
    if (!$j.trim($j('ul.ulMenu', this).html()).length) {
        $j(this).removeClass('d-lg-block');
    }
});

/******************* 
Begin Quick Links v1 
******************/
$j('.quick-links.opt1').each(function(){
    if($j.trim($j('.mpContent',this).html()).length) {
		$j(this).css('background-image', "url("+ $j(this).children('.mpContent').children('img').attr("src") +")"); 
    }
});
$j( '.quick-links.opt1 > .mpContent' ).each( function(){
    var altAttr = $j('img',this).attr('alt');	
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j( '> img',this).attr('alt','');
    }
});
/******************* 
End Quick Links v1 
******************/

/******************* 
Begin Quick Links v2 
******************/
$j('.quick-links.opt2').each(function(){
    if($j.trim($j('.mpContent',this).html()).length) {
		$j(this).css('background-image', "url("+ $j(this).children('.mpContent').children('img').attr("src") +")"); 
    }
});
$j( '.quick-links.opt2 > .mpContent' ).each( function(){
    var altAttr = $j('img',this).attr('alt');	
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j( '> img',this).attr('alt','');
    }
});

$j('.quick-links.opt2').each(function(){
    $j('li>a',this).append('<span class="quick-link-arrow nc-icon-mini arrows-1_minimal-right"></span>' );
});
/******************* 
End Quick Links v2 
******************/



/*******************
Global Script expand and Toggle Click to Edits
******************/
$j('.global-scripts-toggle').on('click', function () {
    $j('.global-scripts').toggleClass('minimized')
});

$j('#toggle-edits').change(function () {
    if (!this.checked) {
        //  ^
           $j('.clickToEditDiv').show();
$j(".plgHeaderBar a:not([onclick*='PhotoGallery']) img[title='Click to edit Plugin Properties']").parentsUntil("table").show();
        $j(".plgHeaderBar a[onclick*='PhotoGallery'] img[title='Click to edit Plugin Properties']").parent().show();
      		$j( "img[title='Click to edit accordion properties']" ).parentsUntil( "div" ).show();
      		$j( "img[title='Click to edit navigation properties']" ).parentsUntil( "div" ).show();
      
        } else {
            $j('.clickToEditDiv').hide();
$j(".plgHeaderBar a:not([onclick*='PhotoGallery']) img[title='Click to edit Plugin Properties']").parentsUntil("table").hide();
        $j(".plgHeaderBar a[onclick*='PhotoGallery'] img[title='Click to edit Plugin Properties']").parent().hide();
  			$j( "img[title='Click to edit accordion properties']" ).parentsUntil( "div" ).hide();
  			$j( "img[title='Click to edit navigation properties']" ).parentsUntil( "div" ).hide();
}
});

/*******************
Set mainContent div min-height 
******************/
function setMainContentHeight() {
	var maincontenttopbotmargins = $j('.sitewrap .mainContent').outerHeight(true) - $j('.sitewrap .mainContent').outerHeight();
	$j('.sitewrap.private.content .mainContent').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('.banner').outerHeight() - $j('footer').outerHeight() - maincontenttopbotmargins));
};
setTimeout(setMainContentHeight, 500);

$j('.private.home .two-column .col-lg-3 > .mpContent').each(function() {
    if (!$j.trim($j(this).html()).length) {
        $j(this).addClass('empty-sidebar-minipg');
    }
});

/*******************
Formbase edits 
******************/
$j('.formBaseFormWrapper > div:eq(1)').addClass('formBtn');
$j('.formBaseFormWrapper > div:eq(1)').addClass('clearFix');
$j('.formBaseFormWrapper > div:eq(1) > div:eq(1)').addClass('secureLink');

var loc = $j('.formControlCell');
$j(loc).each(function(){
var label = $j(this).prev('td');
var labelGuts = $j(label).html();
//$j(this).prepend(labelGuts);
});





/*******************
aria lablels on inaccessible module elements
******************/

function ariasForModules() {
	var i;
	var moduleAnchors = [
		/*dumb random inconsistent camelcase DynamicModule urls*/
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container a',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container button',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container [onclick]',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container [ononmousedown]'
	];
	var moduleSelfClosers = [
		'.login-wrap .abut',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container input[type="submit"]',
		'#defaultnetform:not([action*="ynamic"][action*="odule"]) .modulewrap > .container input[type="button"]'
	]
	for (i = 0; i< moduleAnchors.length || i< moduleSelfClosers.length; ++i) {
		$j(moduleAnchors[i]).each( function(){	
			var ariaLinkLabel = "Click to view " + $j(this).text();
			$j(this).attr({'aria-label':ariaLinkLabel,'title':ariaLinkLabel});
		});	
		$j(moduleSelfClosers[i]).each( function(){	
			var ariaLinkLabel = "Click to " + $j(this).attr('value');
			$j(this).attr({'aria-label':ariaLinkLabel,'title':ariaLinkLabel});
		});	
	}
}
ariasForModules();

/*******************
global button aria for module buttons
******************/
$j('.module.container #calendarLinkBar a, .module.container table[id$="_tblProfilePage"] a, #updatePhotoiframe a, .module .adminBar input[type="button"], .module .adminbar input[type="button"], .module .adminBar input[type="submit"], .module .adminbar input[type="submit"], #printLink a, div.rmpView[id$="_rpvHTML"] a').attr({tabindex:'0',role:'button'});

$j('.axisDialogBox').each( function(){
	console.log('dialog open');
});

/*******************************************************************************************************************************************************
modules
********************************************************************************************************************************************************/

$j('.modulewrap #content td.plgHeaderBar').each(function(){
    $j(this).wrapInner('<h1></h1>');
});
/*******************
attempt to gut out unnecessary empty table elements
******************/

$j( '.modulewrap table' ).each( function(){
	
    $j('td').filter(function() {
    return $j(this).html() === ' ';
	}).addClass('emptyModuleTableCell');
    $j('img[src$="1x1.gif"]').remove();
    if(!$j('body.page').hasClass('PushNotificationCenter')) {
        $j('td:empty',this).addClass('emptyModuleTableCell');
    }
    $j('td:empty,td.tnavBorder:not([style*="width:15%;"])',this).addClass('emptyModuleTableCell');
	$j('.moduleTabsWrapper .emptyModuleTableCell, .tnavBorder.emptyModuleTableCell').remove();
    if(!$j('body.page').hasClass('PushNotificationCenter')) {
        $j('tr:empty',this).addClass('emptyModuleTableRow');
        $j('.modulewrap table tr').each( function(){
          if($j(this).text().trim().length < 1){
            $j(this).addClass('emptyModuleTableRow');
          }

        });
    }
	
	$j('tr[class=""]').removeAttr('class');
	$j('.modulewrap table td.plgHeaderBar').each( function(){
      if($j(this).text().trim().length < 1){
      	$j(this).addClass('emptyPlgHeaderBar');
      }	
	});
	$j('body[class*=alendar] table font:contains("Filter: Show")').addClass('moduleFilterLabel');
});

$j('.NETEventView .module .col-xs-12>table .plgHeaderBar').parent().parent().parent().parent().parent().siblings('.emptyModuleTableRow').remove();
$j('body[class*="v35ProfileUpdateReport"] input.abut[id*="_btnCreateReport"]').closest('td[align="center"]').removeAttr('align');
$j('.moduleTabsWrapper a').attr('role','link');

/*******************
bring in form script when forms are on page
******************/

$j('body.page').each( function(){
    if($j(this).find('.formBaseFormWrapper').length){
        $j(this).append('<script type="text/javascript" src="js/formBlaster.js"></script>' );
    }	
});	

/*******************
when on a module, bring in styles, form js, make module tabs tabbable
******************/
$j('.modulewrap').each( function(){
	$j('head').append('<link rel="stylesheet" type="text/css" href="//clubessential.s3.amazonaws.com/sites/SiteFolderName/css/modules.css">' );
    //$j('body.page').append('<script type="text/javascript" src="js/formBlaster.js"></script>' );
	$j('.moduleTabText > a, .injectContent .mobileTabs li a').each(function() {
		var modTabClassName = $j(this).html().replace(' ', '');
		$j(this).parent('.moduleTabText').addClass(modTabClassName +' tabHasLink');
		$j(this).closest('td[class*="tNav"],li[class*="tab"]').addClass(modTabClassName+'Tab');
	});	

	$j('.moduleTabText:not(.tabHasLink)').each(function() {
		var modTabClassName = $j(this).html().replace(' ', '');
		$j(this).addClass(modTabClassName+'tab');
		$j(this).closest('td').addClass(modTabClassName+'Tab');
	});	
});

/*******************
modul img alt props and element attributes
******************/

$j('.calendarPrevLink').attr('alt','previous');
$j('.calendarNextLink').attr('alt','next');
$j('.calendarLegend img[src*="losed"]').attr('alt','Closed');
$j('.calendarLegend img[src*="old"][src*="ut"]').attr('alt','Sold Out');
$j('.calendarLegend img[src*="ait"][src*="ist"]').attr('alt','Wait Listed');
$j('.calendarLegend img[src*="eserved"]').attr('alt','Reserved');
$j('.calendarLegend img[src*="vailable"]').attr('alt','Available');
$j('.calendarLegend img[src*="ot"][src*="pen"]').attr('alt','Not Yet Open');
$j('img[src*="ico_CalTodayPointer.gif"]').attr('alt','Today');
$j('#eventView #eventHeaderBack img[src$="leftArrow.gif"]').attr('alt','back');
$j('#eventView #eventHeaderTitle img[src$="leftArrow.gif"]').attr('alt','prev event');
$j('#eventView #eventHeaderTitle img[src$="rightArrow.gif"]').attr('alt','next event');
$j('img[src$="vcardicon.gif"]').attr('alt','Add to Contacts');
$j('img[src$="_inactive.gif"]').attr('alt','Inactive');
$j('img[src$="plg_corner.gif"]').attr('alt','');
$j('img[src$="ico_s4_admin.gif"]').attr('alt','Administrator');
$j('img[src$="ico_s4_editor.gif"]').attr('alt','Editor');
$j('img[src$="Print.gif"]').attr('alt','Click to view Printable Version');
$j('table[id$="Photo"] p img').attr('alt','Member Photo');
$j('table[id$="Photo"] p img[src*="memphotona.gif"]').attr('alt','Member Photo not available');
$j('table[id$="Photo"] p img[src$="memphotona.gif"]').attr('src','A_Master/Images/memphotona_HIGHCONTRAST.gif');
$j('.MemberEdit table[id$="rosterControl_tblInput"] td input[type="checkbox"]').parent('td').attr('colspan','2');
//$j('input[type="checkbox"]').attr('role','checkbox');
$j('input[type="radio"]').attr('role','radio');
$j('.mobileButton[id*="ilter"]').attr({role:'button'});
$j('.module [id$=tblAdminBar] td a, .module [id$=tblAdminBar] td input').attr({role:'button'});
$j('#adminDashboardCETab #ceDashboardColumn2 > ul:first-of-type >li.groupHeader:first-of-type > h3').text('Global');
$j('input#btnQuickFilter').renameAttr('onmousedown', 'onclick' );
$j('input#btnQuickFilter').attr('role', 'button' );
$j('img[src$="ClickToEdit.gif"],img[src$="TelerikFusionCorner.gif"]').removeAttr('border');
$j('script').removeAttr('language');

/*******************
directory stuff
******************/
$j('body[class*=MemberRoster] select[id$="_rosterControl_drpActiveFilter"]').each( function(){
	var thisID = $j(this).attr('id');
	$j('<label></label>').attr('for',thisID).insertBefore(this);
	$j('label[for$="_rosterControl_drpActiveFilter"]').text('Active Filter').addClass('rosterActiveFilterLabel sr-only');	
});

$j('.MemberEdit table[id$="rosterControl_tblInput "] td em, .v35Directory table[id$="_tblMyProfile"] td em').replaceWith(function(){
    return $j("<label />").append($j(this).contents());
});
$j('.MemberEdit .emptyModuleTableCell').css('display','table-cell');
$j('.MemberEdit table[id$="rosterControl_tblInput"] td input[type="text"],.MemberEdit table[id$="rosterControl_tblInput"] td select, .v35Directory table[id$="_tblMyProfile"] td input[type="text"], .v35Directory table[id$="_tblMyProfile"] td select').each( function(){
    var thisID = $j(this).attr('id');
	$j(this).parent('td').siblings().children('label').attr('for',thisID);
});
$j('.modRosterHiliteHiddenField a:empty, [id$=rosterControl_tblListing] [class^=RosterRow]>td a:empty').remove();
$j('div.mobileTabsWrapper ul.mobileTabs li a:contains(MyProfile)').text('My Profile');
/*$j('.MemberEdit table[id$="rosterControl_tblInput"] td[width="5"], .MemberEdit table[id$="rosterControl_tblInput"] td:empty').remove();*/


/*******************************************
calendar stuff
******************************************/


/*******************
mobile calendar search return ADA
******************/
$j('.injectContent #calendarSwitch #doSearch').click(function () {
    // Get thevalue and trim it
    var name = $j.trim($j('.injectContent #calendarSwitch #searchInput').val());
    // Check if empty of not
    if (name === '') {
        alert('No Search Criteria Specified');
        return false;
    }
});

/*******************
calendar - add day row
******************/

var calViewMonths = $j('body[class*=alendar] [id$="_jan"], body[class*=alendar] [id$="_feb"], body[class*=alendar] [id$="_mar"], body[class*=alendar] [id$="_apr"], body[class*=alendar] [id$="_may"], body[class*=alendar] [id$="_jun"], body[class*=alendar] [id$="_jul"], body[class*=alendar] [id$="_aug"], body[class*=alendar] [id$="_sep"], body[class*=alendar] [id$="_oct"], body[class*=alendar] [id$="_nov"], body[class*=alendar] [id$="_dec"]');

$j('> tbody > tr:first-of-type',calViewMonths).addClass('firstCalMonthRow');

$j('.firstCalMonthRow').each(function () {
	$j('<tr><td>Su</td><td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td></tr>').insertBefore(this);
});

$j('<span class="icon icon-calendar" aria-hidden="true"></span>').prependTo('body[class*=alendar] .modCalMonth>tbody>tr>td:first-child a');
$j('body[class*=alendar] .modCalMonth>tbody>tr>td:first-child a').each( function(){
	var theLinkTitle = $j(this).attr('title');
	$j('img',this).attr('alt',theLinkTitle);
});

$j('.RadCalendarMonthView .emptyModuleTableRow th[scope="col"]:empty').text('Month / Year Picker');
$j('body[class*=alendar] .rcWeek > .rcViewSel[scope="col"]').text('Week');
var hiddenCalTitleInputIDWeek = $j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .RadInput_Silk > input[type="text"]').attr('id');
$j('<label></label>').text('Date').attr('for',hiddenCalTitleInputIDWeek).prependTo('.calendarTitleBar ~ .RadPicker_Silk .rcTable .RadInput_Silk').hide();
var skipLinkTargetCalIconWeek = $j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .rcCalPopup').closest('.RadPicker_Silk').attr('id');
var skipLinkTargetCalIconWeekHref = "#"+skipLinkTargetCalIconWeek;
$j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .rcCalPopup').attr({'href':skipLinkTargetCalIconWeekHref,tabindex:'0',role:'button'});
$j('.RadCalendarMonthView_Silk a, .RadCalendarMonthView_Silk input[type="button"]').attr({tabindex:'0',role:'button'});
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(Event Title)').addClass('calSearchLabelCell_eventTitle');
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(Event Between)').addClass('calSearchLabelCell_eventBetween');
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(and)').addClass('calSearchLabelCell_and');

$j('.calSearchLabelCell_eventTitle').html(function(_, html) {
   	return html.replace(/(Event Title)/g, '&nbsp;');
});

$j('.calSearchLabelCell_eventBetween').html(function(_, html) {
   	return html.replace(/(Event Between)/g, '&nbsp;');
});

$j('.calSearchLabelCell_and').html(function(_, html) {
   	return html.replace(/(and)/g, '&nbsp;');
});

$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="_txtSearchTitle"], body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="rdpStartDate_dateInput"][class*="riTextBox"],body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="rdpEndDate_dateInput"][class*="riTextBox"]').each( function(){
	var thisID = $j(this).attr('id');
	$j('<label></label>').attr('for',thisID).insertBefore(this);
	$j('label[for$="txtSearchTitle"]').text('Event Title').addClass('calSearchLabel_eventTitle');
	$j('label[for$="StartDate_dateInput"]').text('Event Between').addClass('calSearchLabel_eventBetween');
	$j('label[for$="EndDate_dateInput"]').text('and').addClass('calSearchLabel_eventAnd');
});

$j('.tnavTabON a[id$="_prevSel"],.tnavTabON a[id$="_nextSel"]').attr('role','button');

/*$j('td.calSearchLabelCell_eventTitle').text(' ');
$j('td.calSearchLabelCell_eventBetween').text(' ');
$j('td.calSearchLabelCell_and').text(' ');*/

$j('td[class^="qFilter"] input[type="text"]').each( function(){
	var thisID = $j(this).attr('id');
	$j('<label></label>').text('label').attr('for',thisID).insertBefore(this).hide();
					  
});	

$j('a[target=""]').removeAttr('target');

/* Header Scroll */
var cbpAnimatedHeader = (function() {
	var docElem = document.documentElement,
		header = document.querySelector( 'header' ),
		didScroll = false,
		//changeHeaderOn = $j('.banner div[id^="photoPluginWrapper"] > div:not([style*="none;"])').outerHeight();
	    //changeHeaderOn = 300;
        firstScroll = true;
    
	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
  		if (($j('body').find('.modulewrap').length !== 0) || ($j('body').find('.content.has-no-banner').length !== 0)) {
    		changeHeaderOn = $j('header').outerHeight();
          } 
        else if ($j('body').find('.private.home').length !== 0) {
                    changeHeaderOn = $j('.quick-links').outerHeight();
          }
        else {
          changeHeaderOn = ($j('.banner').outerHeight() - 120);
        }  		
  		//console.log(changeHeaderOn);
		if ( sy >= changeHeaderOn ) {
			$j('header').addClass('shrink');
			$j('body.page').addClass('header-has-shrink');
    		//$j('#scrollDown').attr('style', 'position: absolute; bottom: 50px; height: 10px !important');
    		if(firstScroll == true){
    		 $j('header').css('top', '-120px').animate({ top: 0 });
             firstScroll = false;
            }
		}
		else {
			$j('header').removeClass('shrink');
			$j('body.page').removeClass('header-has-shrink');
  			//$j('header').css('top', '0');
			$j('header').css({'top':''});
            firstScroll = true;
  			//$j('#scrollDown').attr('style', 'position: absolute; bottom: 50px; height: 100px !important');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	//init(); // Un-comment for sticky nav

})();

/*****
Light Box
*****/
$j('.lightBoxDiv .lightBoxNextDiv').focus(function() {
		$j(this).on('keydown', function (e) {
			if (e.which == 13) {
				e.preventDefault();
				$j(this).trigger('click');
			}
		});
 });
