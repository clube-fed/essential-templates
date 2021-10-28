//modules
$j('.modulewrap #content td.plgHeaderBar').each(function () {
	$j(this).wrapInner('<h1></h1>');
});

//attempt to gut out unnecessary empty table elements

$j('.modulewrap table').each(function () {

	$j('td').filter(function () {
		return $j(this).html() === ' ';
	}).addClass('emptyModuleTableCell');
	$j('img[src$="1x1.gif"]').remove();
	if (!$j('body.page').hasClass('PushNotificationCenter')) {
		$j('td:empty', this).addClass('emptyModuleTableCell');
	}
	$j('td:empty,td.tnavBorder:not([style*="width:15%;"])', this).addClass('emptyModuleTableCell');
	$j('.moduleTabsWrapper .emptyModuleTableCell, .tnavBorder.emptyModuleTableCell').remove();
	if (!$j('body.page').hasClass('PushNotificationCenter')) {
		$j('tr:empty', this).addClass('emptyModuleTableRow');
		$j('.modulewrap table tr').each(function () {
			if ($j(this).text().trim().length < 1) {
				$j(this).addClass('emptyModuleTableRow');
			}

		});
	}

	$j('tr[class=""]').removeAttr('class');
	$j('.modulewrap table td.plgHeaderBar').each(function () {
		if ($j(this).text().trim().length < 1) {
			$j(this).addClass('emptyPlgHeaderBar');
		}
	});
	$j('body[class*=alendar] table font:contains("Filter: Show")').addClass('moduleFilterLabel');
});

$j('.NETEventView .module .col-xs-12>table .plgHeaderBar').parent().parent().parent().parent().parent().siblings('.emptyModuleTableRow').remove();
$j('body[class*="v35ProfileUpdateReport"] input.abut[id*="_btnCreateReport"]').closest('td[align="center"]').removeAttr('align');
$j('.moduleTabsWrapper a').attr('role', 'link');

//bring in form script when forms are on page
$j('body.page').each(function () {
	if ($j(this).find('.formBaseFormWrapper').length) {
		$j(this).append('<script type="text/javascript" src="js/formBlaster.js"></script>');
	}
});

//when on a module, bring in styles, form js, make module tabs tabbable
$j('.modulewrap').each(function () {
	$j('head').append('<link rel="stylesheet" type="text/css" href="https://d2nfzhdjx5k7v7.cloudfront.net/CEFED/_Axis-Website/Sites/NationalGolfLinksOfAmerica/css/modules.css">');
	//$j('body.page').append('<script type="text/javascript" src="js/formBlaster.js"></script>' );
	$j('.moduleTabText > a, .injectContent .mobileTabs li a').each(function () {
		var modTabClassName = $j(this).html().replace(' ', '');
		$j(this).parent('.moduleTabText').addClass(modTabClassName + ' tabHasLink');
		$j(this).closest('td[class*="tNav"],li[class*="tab"]').addClass(modTabClassName + 'Tab');
	});

	$j('.moduleTabText:not(.tabHasLink)').each(function () {
		var modTabClassName = $j(this).html().replace(' ', '');
		$j(this).addClass(modTabClassName + 'tab');
		$j(this).closest('td').addClass(modTabClassName + 'Tab');
	});
});

//modul img alt props and element attributes
$j('.calendarPrevLink').attr('alt', 'previous');
$j('.calendarNextLink').attr('alt', 'next');
$j('.calendarLegend img[src*="losed"]').attr('alt', 'Closed');
$j('.calendarLegend img[src*="old"][src*="ut"]').attr('alt', 'Sold Out');
$j('.calendarLegend img[src*="ait"][src*="ist"]').attr('alt', 'Wait Listed');
$j('.calendarLegend img[src*="eserved"]').attr('alt', 'Reserved');
$j('.calendarLegend img[src*="vailable"]').attr('alt', 'Available');
$j('.calendarLegend img[src*="ot"][src*="pen"]').attr('alt', 'Not Yet Open');
$j('img[src*="ico_CalTodayPointer.gif"]').attr('alt', 'Today');
$j('#eventView #eventHeaderBack img[src$="leftArrow.gif"]').attr('alt', 'back');
$j('#eventView #eventHeaderTitle img[src$="leftArrow.gif"]').attr('alt', 'prev event');
$j('#eventView #eventHeaderTitle img[src$="rightArrow.gif"]').attr('alt', 'next event');
$j('img[src$="vcardicon.gif"]').attr('alt', 'Add to Contacts');
$j('img[src$="_inactive.gif"]').attr('alt', 'Inactive');
$j('img[src$="plg_corner.gif"]').attr('alt', '');
$j('img[src$="ico_s4_admin.gif"]').attr('alt', 'Administrator');
$j('img[src$="ico_s4_editor.gif"]').attr('alt', 'Editor');
$j('img[src$="Print.gif"]').attr('alt', 'Click to view Printable Version');
$j('table[id$="Photo"] p img').attr('alt', 'Member Photo');
$j('table[id$="Photo"] p img[src*="memphotona.gif"]').attr('alt', 'Member Photo not available');
$j('table[id$="Photo"] p img[src$="memphotona.gif"]').attr('src', 'A_Master/Images/memphotona_HIGHCONTRAST.gif');
$j('.MemberEdit table[id$="rosterControl_tblInput"] td input[type="checkbox"]').parent('td').attr('colspan', '2');
//$j('input[type="checkbox"]').attr('role','checkbox');
$j('input[type="radio"]').attr('role', 'radio');
$j('.mobileButton[id*="ilter"]').attr({
	role: 'button'
});
$j('.module [id$=tblAdminBar] td a, .module [id$=tblAdminBar] td input').attr({
	role: 'button'
});
$j('#adminDashboardCETab #ceDashboardColumn2 > ul:first-of-type >li.groupHeader:first-of-type > h3').text('Global');
$j('input#btnQuickFilter').renameAttr('onmousedown', 'onclick');
$j('input#btnQuickFilter').attr('role', 'button');
$j('img[src$="ClickToEdit.gif"],img[src$="TelerikFusionCorner.gif"]').removeAttr('border');
$j('script').removeAttr('language');


//directory stuff
$j('body[class*=MemberRoster] select[id$="_rosterControl_drpActiveFilter"]').each(function () {
	var thisID = $j(this).attr('id');
	$j('<label></label>').attr('for', thisID).insertBefore(this);
	$j('label[for$="_rosterControl_drpActiveFilter"]').text('Active Filter').addClass('rosterActiveFilterLabel sr-only');
});

$j('.MemberEdit table[id$="rosterControl_tblInput "] td em, .v35Directory table[id$="_tblMyProfile"] td em').replaceWith(function () {
	return $j("<label />").append($j(this).contents());
});
$j('.MemberEdit .emptyModuleTableCell').css('display', 'table-cell');
$j('.MemberEdit table[id$="rosterControl_tblInput"] td input[type="text"],.MemberEdit table[id$="rosterControl_tblInput"] td select, .v35Directory table[id$="_tblMyProfile"] td input[type="text"], .v35Directory table[id$="_tblMyProfile"] td select').each(function () {
	var thisID = $j(this).attr('id');
	$j(this).parent('td').siblings().children('label').attr('for', thisID);
});
$j('.modRosterHiliteHiddenField a:empty, [id$=rosterControl_tblListing] [class^=RosterRow]>td a:empty').remove();
$j('div.mobileTabsWrapper ul.mobileTabs li a:contains(MyProfile)').text('My Profile');
/*$j('.MemberEdit table[id$="rosterControl_tblInput"] td[width="5"], .MemberEdit table[id$="rosterControl_tblInput"] td:empty').remove();*/

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

//calendar - add day row
var calViewMonths = $j('body[class*=alendar] [id$="_jan"], body[class*=alendar] [id$="_feb"], body[class*=alendar] [id$="_mar"], body[class*=alendar] [id$="_apr"], body[class*=alendar] [id$="_may"], body[class*=alendar] [id$="_jun"], body[class*=alendar] [id$="_jul"], body[class*=alendar] [id$="_aug"], body[class*=alendar] [id$="_sep"], body[class*=alendar] [id$="_oct"], body[class*=alendar] [id$="_nov"], body[class*=alendar] [id$="_dec"]');

$j('> tbody > tr:first-of-type', calViewMonths).addClass('firstCalMonthRow');

$j('.firstCalMonthRow').each(function () {
	$j('<tr><td>Su</td><td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td></tr>').insertBefore(this);
});

$j('<span class="icon icon-calendar" aria-hidden="true"></span>').prependTo('body[class*=alendar] .modCalMonth>tbody>tr>td:first-child a');
$j('body[class*=alendar] .modCalMonth>tbody>tr>td:first-child a').each(function () {
	var theLinkTitle = $j(this).attr('title');
	$j('img', this).attr('alt', theLinkTitle);
});

$j('.RadCalendarMonthView .emptyModuleTableRow th[scope="col"]:empty').text('Month / Year Picker');
$j('body[class*=alendar] .rcWeek > .rcViewSel[scope="col"]').text('Week');
var hiddenCalTitleInputIDWeek = $j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .RadInput_Silk > input[type="text"]').attr('id');
$j('<label></label>').text('Date').attr('for', hiddenCalTitleInputIDWeek).prependTo('.calendarTitleBar ~ .RadPicker_Silk .rcTable .RadInput_Silk').hide();
var skipLinkTargetCalIconWeek = $j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .rcCalPopup').closest('.RadPicker_Silk').attr('id');
var skipLinkTargetCalIconWeekHref = "#" + skipLinkTargetCalIconWeek;
$j('body[class*=alendar] [id^=axisCalendar] .calendarTitleBar ~ .RadPicker_Silk .rcTable .rcCalPopup').attr({
	'href': skipLinkTargetCalIconWeekHref,
	tabindex: '0',
	role: 'button'
});
$j('.RadCalendarMonthView_Silk a, .RadCalendarMonthView_Silk input[type="button"]').attr({
	tabindex: '0',
	role: 'button'
});
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(Event Title)').addClass('calSearchLabelCell_eventTitle');
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(Event Between)').addClass('calSearchLabelCell_eventBetween');
$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td:contains(and)').addClass('calSearchLabelCell_and');

$j('.calSearchLabelCell_eventTitle').html(function (_, html) {
	return html.replace(/(Event Title)/g, '&nbsp;');
});

$j('.calSearchLabelCell_eventBetween').html(function (_, html) {
	return html.replace(/(Event Between)/g, '&nbsp;');
});

$j('.calSearchLabelCell_and').html(function (_, html) {
	return html.replace(/(and)/g, '&nbsp;');
});

$j('body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="_txtSearchTitle"], body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="rdpStartDate_dateInput"][class*="riTextBox"],body[class*=alendar] [id^=axisCalendar] .tnavTabON table[id$="_placeholder1"] table[cellpadding="3"][cellspacing="1"] td input[type="text"][id$="rdpEndDate_dateInput"][class*="riTextBox"]').each(function () {
	var thisID = $j(this).attr('id');
	$j('<label></label>').attr('for', thisID).insertBefore(this);
	$j('label[for$="txtSearchTitle"]').text('Event Title').addClass('calSearchLabel_eventTitle');
	$j('label[for$="StartDate_dateInput"]').text('Event Between').addClass('calSearchLabel_eventBetween');
	$j('label[for$="EndDate_dateInput"]').text('and').addClass('calSearchLabel_eventAnd');
});

$j('.tnavTabON a[id$="_prevSel"],.tnavTabON a[id$="_nextSel"]').attr('role', 'button');

/*$j('td.calSearchLabelCell_eventTitle').text(' ');
$j('td.calSearchLabelCell_eventBetween').text(' ');
$j('td.calSearchLabelCell_and').text(' ');*/

$j('td[class^="qFilter"] input[type="text"]').each(function () {
	var thisID = $j(this).attr('id');
	$j('<label></label>').text('label').attr('for', thisID).insertBefore(this).hide();

});

$j('a[target=""]').removeAttr('target');
