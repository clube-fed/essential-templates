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