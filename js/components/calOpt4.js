//calendar option 4
$j('.calendar.opt4 > .mpContent:first-child').each(function () {
    $j(this).css('background-image', "url(" + $j('img', this).attr("src") + ")");
});