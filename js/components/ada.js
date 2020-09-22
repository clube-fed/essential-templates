//lang needed for ADA
$j('html').attr('lang', 'en');

//event listeners for tabs
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

//login page
$j('.login-wrap div[id*=wrapLogin] input[type="text"], .login-wrap div[id*=wrapLogin] input[type="password"]').each(function () {
	var logInputID = $j(this).attr('id');
	var logInputVal = $j(this).attr('value');
	$j('<label class="login-inputs_fields" />').attr('for', logInputID).css({
		'position': 'absolute',
		'left': '-9999px'
	}).insertBefore(this);
	$j('.login-inputs_fields[for*="_txtUsername"]').text('Username');
	$j('.login-inputs_fields[for*="_txtPassword"]').text('Password');
});

//$j('.login-wrap div[id*=wrapLogin] .abut').attr('tabindex','3');
//$j('.login-wrap div[id*=wrapLogin] .login-inputs_cookie input').attr('tabindex','4');
//$j('.login-wrap div[id*=wrapLogin] .login-inputs_forgotPassword a').attr('tabindex','5');
$j('<span>Error: </span>').prependTo('.login-wrap .errLogin');

$j('.login-wrap div[id*=wrapLogin] .errLogin:contains(username)').each(function () {
	$j('.login-wrap .advLogUsername').css({
		'background': 'red',
		'color': 'white'
	});
});

$j('.login-wrap div[id*=wrapLogin] .errLogin:contains(password)').each(function () {
	$j('.login-wrap .advLogPassword').css({
		'background': 'red',
		'color': 'white'
	});
});

$j('#txtIeAltUsername').text('Username');
$j('#txtIeAltPassword').text('Password');
$j('.login-wrap .login-logo > a').attr('tabindex', '1');
$j('.login-wrap .advLogUsername').attr('tabindex', '2');
$j('.login-wrap .advLogPassword').attr('tabindex', '3');
$j('.login-wrap .abut').attr('tabindex', '4');
$j('.login-wrap .advLogRemoveChk').attr('tabindex', '5');
$j('.login-wrap .login-inputs_forgotPassword a').attr('tabindex', '6');
$j('.login').closest('#defaultnetform').parent('body').addClass('theActualLoginPage')
$j('.theActualLoginPage > #defaultnetform > div[id^="masterPageUC_MSTR"]').addClass('outerMasterPageWrap');
//$j('.outerMasterPageWrap footer').addClass('login-footer');
$j('.login-wrap table span a').attr('aria-label', 'Click here to Logout');
/*$j('.login-wrap .login-bot-r a').renameAttr('onclick', 'onkeypress' );*/

$j('a[onclick*="changeUN"]').attr('aria-label', 'click to open username change dialog box');
$j('a[onclick*="changePW"]').attr('aria-label', 'click to open password change dialog box');
$j('a[onclick*="changeUN"],a[onclick*="changePW"]').attr('role', 'button');

$j('.login-wrap .login-inputs_cookie span.advLogRemoveChk').focus(function () {
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

//ADA for tabstrip and accordion
$j('.tabstrip.RadTabStrip_Tab_responsive > .levelwrap.level1 > ul > li > a > span.wrap > span.innerWrap').each(function () {
	var ariaLinkLabel = "Click to read more about " + $j(this).text();
	$j(this).closest('a').attr({
		'aria-label': ariaLinkLabel,
		'title': ariaLinkLabel
	});
});

$j('.RadPanelBar_accordionTemplate a.rpLink').each(function () {
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
	$j(this).siblings('.rpSlide').attr({
		'id': ariaIDSlide,
		'role': 'region',
		'aria-labelledby': ariaIDAccord
	});
	$j(this).attr({
		'id': ariaIDAccord,
		'aria-label': ariaLinkLabelExpand,
		'title': ariaLinkLabelExpand,
		'aria-expanded': 'false',
		'aria-controls': ariaIDSlide
	});

});

//accordion tabstrip images
$j('.content .rpTemplate .mpContent img:not([alt])').each(function () {
	var theAccordTitle = $j(this).parent().parent().parent().parent().siblings().children().find('.rpText').text();
	accordImgAltText = "Image for " + theAccordTitle + "Accordion Content";
	$j(this).attr('alt', accordImgAltText);
});

$j('.content .tsContent .mpContent img:not([alt])').each(function () {
	$j(this).attr('alt', 'Image for Tab Strip Content');
});


//mobile calendar search return ADA
$j('.injectContent #calendarSwitch #doSearch').click(function () {
	// Get thevalue and trim it
	var name = $j.trim($j('.injectContent #calendarSwitch #searchInput').val());
	// Check if empty of not
	if (name === '') {
		alert('No Search Criteria Specified');
		return false;
	}
});

//article stuff

$j('#articlePrintLink > a').attr({
	role: 'button'
});
$j('.editArticleLink').attr({
	role: 'button'
});
$j('body[class*=ArticleList] a[href*="_ArticleView"]').attr({
	role: 'link'
});

//icons - hide from screen readers

$j('[class*="icon "][class*="icon-"]').attr('aria-hidden', 'true');

$j('#adminDashboardCETab #ceDashboardColumn2 > ul:first-of-type >li.groupHeader:first-of-type > h3').text('Global');

$j('.sitewrap').each(function () {
	if ($j('.banner [id^="photoPluginWrapper"]', this).length) {
		$j(this).addClass('hasBannerAlbum');
	}
});
$j(".banner:contains('There are no Categories or Images assigned to this album')").parents('.sitewrap').addClass('emptyBannerAlbum');

$j('html').on('click', '.banner .scroll-down', function () {
	if ($j(window).width() > 1199) {
		$j('html, body').animate({
			scrollTop: '+=' + ($j('.banner').height() + $j('header').height() - 100 - $j(window).scrollTop())
		}, 500)
	} else {
		$j('html, body').animate({
			scrollTop: '+=' + ($j('.banner').height() + $j('header').height() - $j(window).scrollTop())
		}, 500)
	}
});

//add image alt tags to mpContent images
$j('.sitewrap.content .mpContent img').each(function () {
	var altAttr = $j(this).attr('alt');
	if (typeof altAttr !== typeof undefined && altAttr !== false) {
		// Element has alt attribute
	} else {
		$j(this).attr('alt', '');
	}
});

//aria lablels on inaccessible module elements
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
	for (i = 0; i < moduleAnchors.length || i < moduleSelfClosers.length; ++i) {
		$j(moduleAnchors[i]).each(function () {
			var ariaLinkLabel = "Click to view " + $j(this).text();
			$j(this).attr({
				'aria-label': ariaLinkLabel,
				'title': ariaLinkLabel
			});
		});
		$j(moduleSelfClosers[i]).each(function () {
			var ariaLinkLabel = "Click to " + $j(this).attr('value');
			$j(this).attr({
				'aria-label': ariaLinkLabel,
				'title': ariaLinkLabel
			});
		});
	}
}
//ariasForModules();

//global button aria for module buttons
$j('.module.container #calendarLinkBar a, .module.container table[id$="_tblProfilePage"] a, #updatePhotoiframe a, .module .adminBar input[type="button"], .module .adminbar input[type="button"], .module .adminBar input[type="submit"], .module .adminbar input[type="submit"], #printLink a, div.rmpView[id$="_rpvHTML"] a').attr({
	tabindex: '0',
	role: 'button'
});

$j('.axisDialogBox').each(function () {
	console.log('dialog open');
});
