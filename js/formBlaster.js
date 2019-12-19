(function (a) {
	a.fn.replaceTagName = function (f) {
		var g = [],
			h = this.length;
		while (h--) {
			var k = document.createElement(f),
				b = this[h],
				d = b.attributes;
			for (var c = d.length - 1; c >= 0; c--) {
				var j = d[c];
				k.setAttribute(j.name, j.value)
			}
			k.innerHTML = b.innerHTML;
			a(b).after(k).remove();
			g[h - 1] = k
		}
		return a(g)
	}
})(window.jQuery);

$j('table.formQuestionWrapper').each(function () {
    var formQuestionWrapperWidth = $j(this).parent('td').attr('width');
    //$j(this).attr('style',"width:" + formQuestionWrapperWidth);
    if (formQuestionWrapperWidth === '66.6666666666667%') {
        $j(this).addClass('col-md-8');
        }
    if (formQuestionWrapperWidth === '50%') {
        $j(this).addClass('col-md-6');
        }
    if (formQuestionWrapperWidth === '33.3333333333333%') {
        $j(this).addClass('col-md-4');
        }
    if (formQuestionWrapperWidth === '25%') {
        $j(this).addClass('col-md-3');
        }
});

$j('#formQuestionWrapper_5_114, #formQuestionWrapper_5_113, #formQuestionWrapper_5_112, #formQuestionWrapper_5_111, #formQuestionWrapper_5_110, #formQuestionWrapper_5_109').each(function () {
    //$j('label', this).addClass('col-xs-12 col-md-11');
    //$j('input', this).addClass('col-xs-12 col-md-1');
});

$j('.formBaseFormWrapper table').replaceTagName('div');

$j('.articleAuthor font').replaceTagName('strong');
$j('font').replaceTagName('span');


$j('b').replaceTagName('strong');
$j('i').replaceTagName('em');



$j('.formBaseForm .formQuestionWrapper > div').each(function () {
	var fieldsets = $j('.formQuestionWrapper > div > input[type="radio"], .formQuestionWrapper > div > input[type="radio"] + label, .formQuestionWrapper > div > input[type="checkbox"], .formQuestionWrapper > div > input[type="checkbox"] + label');
	for(var i = 0; i < fieldsets.length; i+=2) {
	  fieldsets.slice(i, i+2).wrapAll('<fieldset class="formFieldset" />');
	} 
});

$j('.formBaseForm .formQuestionWrapper > div > .formFieldset').each(function () {

		var legendText = $j(this).parent().siblings('label').text();
        $j(this).parent().siblings('label').wrap('<span class="legend"></span>');
		
		$j(this).prepend('<legend />');
        //$j('legend',this).text(legendText);
});

$j('.formBaseForm .formQuestionWrapper > span').each(function () {
	var closeDiv = $j(this).siblings('div');
	$j(this).prependTo(closeDiv);
	});
	
	
	$j('.formBaseForm .formQuestionWrapper label').each(function () {
	var associatedInputID = $j(this).siblings('input, textarea, select').attr('id');
	$j(this).attr('for',associatedInputID);
});


$j('.formBaseForm .formQuestionWrapper > span').each(function () {
	var telerikBastardChildID = $j(this).children('input').attr('id');
	$j(this).siblings('label').attr('for',telerikBastardChildID);

});
	
$j('.formBaseForm .formQuestionWrapper > div > span').each(function () {
		var legendLabel = $j('label',this).text();
		$j(this).text( legendLabel);
});	

$j('.RadAjax img[src*="loading"]').attr('alt','loading');


$j('div.formBaseFormWrapper div[id*="_pnlCaptcha"] > div').addClass('innerCaptchaDiv').wrapInner('<span class="innerCaptchaSpan"></span>');

$j('.innerCaptchaSpan > *').prependTo('.innerCaptchaDiv');

var captchaInput = $j('div.formBaseFormWrapper div[id*="_pnlCaptcha"] input[type="text"]');

var captchaInputID = $j(captchaInput).attr('id');
$j('.innerCaptchaDiv > img').addClass('captchaImage').attr('alt','Enter the verification code into the text box below');;
$j('<br>').insertBefore('.captchaImage');
var captchaLabelTxt = $j('.innerCaptchaSpan').text();
$j('<br><label class="captchaLabel" /><br>').insertBefore(captchaInput);
$j('.captchaLabel').text('Enter the verification code shown above into the text box below.').attr('for',captchaInputID);

$j('.innerCaptchaSpan').remove();

$j('div.formBaseFormWrapper div[id*="_pnlCaptcha"] a[id*="_lbNewCode"]').text(' Generate a New Code. ');



$j('.formBaseFormWrapper div').removeAttr('width align border cellpadding cellspacing');

$j('.formBaseFormWrapper div.formSection > div').addClass('row');
$j('.formBaseFormWrapper div.formSection > div > div.formQuestionWrapper').addClass('col-xs-12');

//$j('.formBaseFormWrapper div.formSection > div > div.formQuestionWrapper').addClass('col-md-12');

$j('.formBaseFormWrapper div.formQuestionWrapper select').addClass('dropDownList');
$j('.formBaseFormWrapper div.formQuestionWrapper select[size]').addClass('singleSelectList');
$j('.formBaseFormWrapper div.formQuestionWrapper select[multiple]').addClass('multipleSelectList');
$j('.singleSelectList, .multipleSelectList').removeClass('dropDownList');
$j('.formBaseFormWrapper div.formQuestionWrapper .dropDownList').wrap('<div class="dropDownListWrap"></div>');

$j('div.formQuestionWrapper select option:empty').remove();


/*$j('<span class="icon icon-arrow-down5"></span>').prependTo('div.formQuestionWrapper .dropDownListWrap');
$j('div.formSection .row div.formQuestionWrapper .dropDownListWrap > span').click( function(){
	
	
	
	
	var theDDSelect=$j(this).siblings('select');
	
	
	
var length = $j(this).siblings('select').children('option').length;

//close dropdown
$j(this).siblings('select').attr('size',0);
	
//open dropdown
$j(this).siblings('select.opened').attr('size',length);	
	
$j(this).siblings('select').toggleClass('opened');
  });
  

*/



$j('.dropDownListWrap select').each(function () {
	 $j(this).attr('role','listbox'); 
	$j('option',this).attr('role','option'); 
});	

$j('.formQuestionWrapper input.formDatePicker').focus(function () {
	setTimeout(function () { 
		$j(this).keydown(function () {
			$j('.ui-datepicker-calendar').focus();
		});	
	}, 100);
});	



 $j('<label for="g-recaptcha-response" />').insertBefore($j('div.formBaseFormWrapper div[id*="_pnlCaptcha"] textarea[id="g-recaptcha-response"]'));

/* Public pre-footer email sign up form */
$j('.request-info-form').find('input[type=text]').attr("placeholder", "Enter Email Address");
$j('.pre-footer').find('input[type=text]').attr("placeholder", "");

if ($j(window).width() > 752){
$j('.request-info-form').find('input.FbSubmitBtn').detach().insertAfter('.request-info-form input[type="text"]');
$j('.pre-footer').find('input.FbSubmitBtn').detach().insertAfter('.pre-footer .formQuestionWrapper:last-child input[type="text"]');
}

$j('.request-info-form input[type="text"]').each(function(){
    //console.log($j(this).parent().attr('id'));
    var footerFormInputID = $j(this).attr('id');
    $j('<label class="footerFormLabel" />').text('Enter email addresss.', this).attr('for',footerFormInputID).insertBefore(this);
});

$j('.pre-footer:not(.type2) input[type="text"]').each(function(){
    //console.log($j(this).parent().attr('id'));
    var prefooterFormInputID = $j(this).attr('id');
    $j('<label class="prefooterFormLabel" />').text('Enter email addresss.', this).attr('for',prefooterFormInputID).insertBefore(this);
});

$j('span[id$="_litUpdateImage"]').parents('table').attr('role','presentation');