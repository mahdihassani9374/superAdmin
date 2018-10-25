$(function () {

    new WOW().init();

    // start menu responsive

    $('.header__menu').on('click', function (event) {
        event.stopPropagation();
        $('.sidebar').addClass('toggled');
        $('body').addClass('aside-toggled');
    })

    $('.sidebar').on('click', function (event) {
        event.stopPropagation();
    })

    $(window).click(function (event) {
        $('.sidebar').removeClass('toggled');
        $('body').removeClass('aside-toggled');
    });

    // end menu responsive

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.header').addClass('header--scrolled');
        } else {
            $('.header').removeClass('header--scrolled');
        }
    })

    // show / hide sub menu

    $('.sidebar__navigation__item').on('click', function (event) {
        event.stopPropagation();
        //var active = $(this).find('.sidebar__navigation__item__link').addClass('active');
        var subMenu = $(this).find('ul.sidebar__navigation-sub').slideToggle();
    })

    // show / hide sub menu

    // scroll bar 

    $(".scroll-panel").mCustomScrollbar({
        scrollButtons: {
            enable: true,
            scrollType: "stepped"
        },
        keyboard: {
            scrollType: "stepped"
        },
        mouseWheel: {
            scrollAmount: 188,
            normalizeDelta: true
        },
        theme: "rounded-dark",
        autoExpandScrollbar: true,
        snapAmount: 188,
        snapOffset: 65

    });

    // seperator 

    // seperator 
    function seperator(x) {
        var sep = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log(sep);
        return sep;
    }

    $('.seperator').each(function (index, el) {
        $(el).text(seperator(el.innerText));
    })

    // amchart js 

    var chart = AmCharts.makeChart("chartdiv", {
        "type": "serial",
        "theme": "dark",
        "dataDateFormat": "YYYY-MM-DD",
        "dataProvider": [{
            "date": "2013-11-30",
            "value": 104
        }, {
            "date": "2013-12-01",
            "value": 108
        }, {
            "date": "2013-12-02",
            "value": 103
        }, {
            "date": "2013-12-03",
            "value": 105
        }, {
            "date": "2013-12-04",
            "value": 136
        }, {
            "date": "2013-12-05",
            "value": 138
        }, {
            "date": "2013-12-06",
            "value": 113
        }, {
            "date": "2013-12-07",
            "value": 131
        }, {
            "date": "2013-12-08",
            "value": 114
        }, {
            "date": "2013-12-09",
            "value": 124
        }],
        "valueAxes": [{
            "maximum": 140,
            "minimum": 100,
            "axisAlpha": 0,
            "guides": [{
                "fillAlpha": 0.1,
                "fillColor": "#CC0000",
                "lineAlpha": 0,
                "toValue": 120,
                "value": 0
            }, {
                "fillAlpha": 0.1,
                "fillColor": "#0000cc",
                "lineAlpha": 0,
                "toValue": 200,
                "value": 120
            }]
        }],
        "graphs": [{
            "bullet": "round",
            "dashLength": 4,
            "valueField": "value"
        }],
        "chartCursor": {
            "cursorAlpha": 0,
            "zoomable": false,
            "valueZoomable": true
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true
        },
        "valueScrollbar": {

        }
    });

})