//calendar opt 1
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
