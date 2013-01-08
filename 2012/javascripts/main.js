$(function() {
    $('#show-archive-news').click(function() {
        var $hideArchiveNews = $('#hide-archive-news');

        $('article.news-archive').show();

        if ($hideArchiveNews.hasClass('hidden')) {
            $hideArchiveNews.removeClass('hidden');
        }
        $(this).addClass('hidden');

        return false;
    });

    $('#hide-archive-news').click(function() {
        var $showArchiveNews = $('#show-archive-news');

        $('article.news-archive').hide();

        if ($showArchiveNews.hasClass('hidden')) {
            $showArchiveNews.removeClass('hidden');
        }
        $(this).addClass('hidden');

        return false;
    });

    $.each([$('.socialIcons a'),
            $('.speaker-job-title a'),
            $('#sponsors').find('a'),
            $('#registration-link').find('a'),
            $('#registration-link-320').find('a')], function (i, $elements) {
        if ($elements.length > 0) {
            $elements.click(function () {
                this.target = '_blank';
            });
        }
    });
});