(function () {
    var navbarWidth = $('#navbar').width();
    $('#navbar').sticky({
        topSpacing: 0,
        getWidthFrom: '#navbar'
    }).width(navbarWidth);
})();