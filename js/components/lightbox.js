//Light Box
$j('.lightBoxDiv .lightBoxNextDiv').focus(function () {
    $j(this).on('keydown', function (e) {
        if (e.which == 13) {
            e.preventDefault();
            $j(this).trigger('click');
        }
    });
});