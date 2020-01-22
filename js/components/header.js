//reveal nav onLoad function
$j(function () {
    $j('.hideNav').css("display", "flex");
    $j('.hideNav').hide();
    $j('.hideNav').fadeIn(100);
});

//ada header image role function
$j('header img').each(function () {
    var altAttr = $j(this).attr('role');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
        // Element has alt attribute
    } else {
        $j(this).attr('role', 'img');
    }
});

//adding class to header-utility header
$j('header').each(function () {
    if ($j('.header-utility-bar', this).length) {
        $j(this).addClass('has-util-bar');
    }
});