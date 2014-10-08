$(function () {
    if ($('input[type=hidden][name=message]').val()) {
        var m = $('input[type=hidden][name=message]').val();
        var f = $('input[type=hidden][name=file]').val();
        var l = $('input[type=hidden][name=line]').val();
        $('<div />')
            .css('position', 'absolute')
            .css('bottom', '30px')
            .css('right', '0px')
            .css('width', '600px')
            .css('padding', '20px')
            .css('background', '#e9e9ef')
            .css('border-radius', '14px 0 0 14px')
            .css('box-shadow', '0 0 14px #000')
            .html('<span style="color: red; font-weight: bold; font-size: 25px;">' + m + '</span><br>' +
                  '<span style="line-height: 100%; font-size: 10px;">File: ' + f + '<br>Line: ' + l + '</span>')
            .hide()
            .appendTo($(document.body))
            .fadeIn('fast');
    }
});
