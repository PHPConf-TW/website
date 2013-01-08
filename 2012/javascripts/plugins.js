// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

$(document).ready(function () {

    /**
     * adjust google map to a suitable size
     */
    function changeGoogleMapIframeSrc() {
        var $map = $('#map');
        if ($map.length > 0) {
            $map.remove();
        }

        var bodyWidth = $('#main').css('width');
        var html = '<iframe id="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="{{ src }}"></iframe>';
        var src = '';

        switch (parseInt(bodyWidth)) {
            case 320:
                src = 'https://maps.google.com.tw/maps/ms?msid=204336690330534160949.0004c9390224242bdb896&msa=0&ie=UTF8&t=m&brcurrent=3,0x3442ac6b61dbbd9d:0xc0c243da98cba64b,1&source=embed&ll=25.046103,121.612129&spn=0.099533,0.085144&z=14&output=embed';
                break;
            case 480:
                src = 'https://maps.google.com.tw/maps/ms?msid=204336690330534160949.0004c9390224242bdb896&msa=0&ie=UTF8&t=m&brcurrent=3,0x3442ac6b61dbbd9d:0xc0c243da98cba64b,1&source=embed&ll=25.04968,121.613159&spn=0.037324,0.068321&z=13&output=embed';
                break;
            case 720:
                src = 'https://maps.google.com.tw/maps/ms?msid=204336690330534160949.0004c9390224242bdb896&msa=0&ie=UTF8&t=m&brcurrent=3,0x3442ac6b61dbbd9d:0xc0c243da98cba64b,1&source=embed&ll=25.04968,121.613159&spn=0.037324,0.068321&z=14&output=embed';
                break;
            case 960:
                src = 'https://maps.google.com.tw/maps/ms?msid=204336690330534160949.0004c9390224242bdb896&msa=0&ie=UTF8&t=m&brcurrent=3,0x3442ac6b61dbbd9d:0xc0c243da98cba64b,1&source=embed&ll=25.04968,121.613159&spn=0.037324,0.068321&z=15&output=embed';
                break;
            default:
                return;
        }

        html = html.replace('{{ src }}', src);
        $('.google-map-link a').attr('href', src);
        $('.google-map').prepend(html);
    }

    changeGoogleMapIframeSrc();
    $(window).resize(function () {
        changeGoogleMapIframeSrc();
    });
});
