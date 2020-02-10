//quicklinks 2
$j('.quick-links.opt2').each(function () {
  if ($j.trim($j('.mpContent', this).html()).length) {
    $j(this).css('background-image', "url(" + $j(this).children('.mpContent').children('img').attr("src") + ")");
  }
});
$j('.quick-links.opt2 > .mpContent').each(function () {
  var altAttr = $j('img', this).attr('alt');
  if (typeof altAttr !== typeof undefined && altAttr !== false) {
    // Element has alt attribute
  } else {
    $j('> img', this).attr('alt', '');
  }
});

$j('.quick-links.opt2').each(function () {
  $j('li>a', this).append('<span class="quick-link-arrow nc-icon-mini arrows-1_minimal-right"></span>');
});