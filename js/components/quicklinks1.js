//quicklinks option 1
$j('.quick-links.opt1').each(function () {
  if ($j.trim($j('.mpContent', this).html()).length) {
    $j(this).css('background-image', "url(" + $j(this).children('.mpContent').children('img').attr("src") + ")");
  }
});
$j('.quick-links.opt1 > .mpContent').each(function () {
  var altAttr = $j('img', this).attr('alt');
  if (typeof altAttr !== typeof undefined && altAttr !== false) {
    // Element has alt attribute
  } else {
    $j('> img', this).attr('alt', '');
  }
});