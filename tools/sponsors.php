<?php

$sponsors = array(
    array(
        'year' => '2013',
        'last_timestamp' => time(),
        'sponsors' => array(
            array(
                'level' => 1,
                'name' => 'KKBOX',
                'url' => 'http://tw.kkbox.com/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/kkbox.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/kkbox-mobile.png',
            ),
            array(
                'level' => 2,
                'name' => '捕夢網',
                'url' => 'http://www.pumo.com.tw/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/pumo.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/pumo-mobile.png',
            ),
            array(
                'level' => 2,
                'name' => '巴哈姆特',
                'url' => 'http://www.gamer.com.tw/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/bahamut.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/bahamut-mobile.png',
            ),
            array(
                'level' => 3,
                'name' => '自由軟體鑄造場',
                'url' => 'http://www.openfoundry.org/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/ossf.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/ossf-mobile.png',
            ),
            array(
                'level' => 3,
                'name' => 'Mobile01',
                'url' => 'http://www.mobile01.com/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/mobile01.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/mobile01-mobile.png',
            ),
            array(
                'level' => 4,
                'name' => '活動通',
                'url' => 'http://www.accupass.com/',
                'web_logo' => 'http://phpconf.tw/2013/images/sponsors/accupass.png',
                'mobile_logo' => 'http://phpconf.tw/2013/images/sponsors/accupass-mobile.png',
            ),
        ),
    ),
);

file_put_contents(__DIR__ . '/../api/sponsors,json', json_encode($sponsors, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
