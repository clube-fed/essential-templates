// Collage v1, v2, v3 
$j('.collage.opt1 .mpContent, .collage.opt2 .mpContent, .collage.opt3 .mpContent').each(function(){
    if($j(this).find('img').length){
        $j(this).css('background-image', "url("+ $j(this).find('img').attr("src") +")");       
        }
    else {
        $j(this).parent().addClass('no-collage-img');
    }
    if($j(this).find('a').length) {
        $j(this).parent().addClass('hasCalloutLink').parent().addClass('hasCalloutLink');
        $j(this).find('a').addClass('abut-transparent');
        var collage_callout_href = $j('a', this).attr('href');
        var collage_callout_title = $j('a',this).text();
        var ImageAltText = "Image for " + collage_callout_title;
        $j( 'img',this).attr('alt',ImageAltText);
        var outerCollageCalloutAnchor = $j( "<a class='outerCollageCalloutAnchor'></a>" ).attr( "href", collage_callout_href);
        $j( this ).find('img').wrap( outerCollageCalloutAnchor );	
    }
    else{}
});