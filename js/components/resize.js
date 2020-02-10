//Resize Script 
var TIMEOUT = null;

function resizeSitewrap() {
  if ($j('#adminDashboard').length && $j(window).width() > 1024 && $j('#adminDashboard').css('display') != 'none') {
    $j('.sitewrap').css('min-height', ($j(window).height() - 46) + "px");
    $j('.modulewrap > .container').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('footer').outerHeight() - 46));

  } else {
    $j('.sitewrap').css('min-height', $j(window).height() + "px");
    $j('.modulewrap > .container').css('min-height', ($j(window).height() - $j('header').outerHeight() - $j('footer').outerHeight()));
  };
  /******************* Resize Trigger for Photo Album's (Sets Min Height)******************/
  aScrollResize();
}