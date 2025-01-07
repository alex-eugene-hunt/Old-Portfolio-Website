$(function () {

    var $data1 = $('#data1');
    var $data2 = $('#data2');
    var $data3 = $('#data3');
    var $data4 = $('#data4');
    $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=47.620495&lon=-122.349303&units=imperial&appid=a0bfe75fbff13d4040af7eb66d1d82b1',
        success: function (data) {
            $data1.append(Math.round(data.main.temp) + '\u00B0' + 'F');
            $data2.append(Math.round(data.main.temp_max) + '\u00B0');
            $data3.append(Math.round(data.main.temp_min) + '\u00B0');

            var ClearSkyDay = document.createElement('img');
            ClearSkyDay.src = 'WeatherIcons/01d.png';

            var ClearSkyNight = document.createElement('img');
            ClearSkyNight.src = 'WeatherIcons/01n.png';

            var FewCloudsDay = document.createElement('img');
            FewCloudsDay.src = 'WeatherIcons/02d.png';

            var FewCloudsNight = document.createElement('img');
            FewCloudsNight.src = 'WeatherIcons/02n.png';

            var ScatteredClouds = document.createElement('img');
            ScatteredClouds.src = 'WeatherIcons/03n.png';

            var BrokenClouds = document.createElement('img');
            BrokenClouds.src = 'WeatherIcons/04n.png';

            var ShowerRain = document.createElement('img');
            ShowerRain.src = 'WeatherIcons/09n.png';

            var RainDay = document.createElement('img');
            RainDay.src = 'WeatherIcons/10d.png';

            var RainNight = document.createElement('img');
            RainNight.src = 'WeatherIcons/10n.png';

            var Thunderstorm = document.createElement('img');
            Thunderstorm.src = 'WeatherIcons/11d.png';

            var Snow = document.createElement('img');
            Snow.src = 'WeatherIcons/13d.png';

            var Mist = document.createElement('img');
            Mist.src = 'WeatherIcons/50n.png';

            $.each(data.weather, function (i, item) {
                if (item.icon == '01d') {
                    $data4.append(ClearSkyDay);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '01n') {
                    $data4.append(ClearSkyNight);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '02d') {
                    $data4.append(FewCloudsDay);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '02n') {
                    $data4.append(FewCloudsNight);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '03d' || item.icon == '03n') {
                    $data4.append(ScatteredClouds);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '04d' || item.icon == '04n') {
                    $data4.append(BrokenClouds);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '09d' || item.icon == '09n') {
                    $data4.append(ShowerRain);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '10d') {
                    $data4.append(RainDay);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '10n') {
                    $data4.append(RainNight);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '11d' || item.icon == '11n') {
                    $data4.append(Thunderstorm);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '13d' || item.icon == '13n') {
                    $data4.append(Snow);
                }
            })


            $.each(data.weather, function (i, item) {
                if (item.icon == '50d' || item.icon == '50n') {
                    $data4.append(Mist);
                }
            })
        }
    });

    var $stock1 = $('#stock1');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            $.each(percent, function (i, item) {
                $stock1.append(item.symbol);
            })
        }
    });

    var $stock2 = $('#stock2');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            $.each(percent, function (i, item) {
                $stock2.append(item.symbol);
            })
        }
    });

    var $stock3 = $('#stock3');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            $.each(percent, function (i, item) {
                $stock3.append(item.symbol);
            })
        }
    });

    var $change1 = $('#change1');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            var UpArrow1 = document.createElement('img');
            UpArrow1.src = 'img/UpArrow.png';
            var DownArrow1 = document.createElement('img');
            DownArrow1.src = 'img/DownArrow.png';
            $.each(percent, function (i, item) {
                if (item.changesPercentage > 0) {
                    document.getElementById("change1").style.color = "#17A400";
                    $change1.append("+" + (Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change1.append(UpArrow1);
                }
                if (item.changesPercentage < 0) {
                    document.getElementById("change1").style.color = "#AF0303";
                    $change1.append((Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change1.append(DownArrow1);
                }
            })
        }
    });

    var $change2 = $('#change2');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/GOOGL?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            $.each(percent, function (i, item) {
                var UpArrow2 = document.createElement('img');
                UpArrow2.src = 'img/UpArrow.png';
                var DownArrow2 = document.createElement('img');
                DownArrow2.src = 'img/DownArrow.png';
                if (item.changesPercentage > 0) {
                    document.getElementById("change2").style.color = "#17A400";
                    $change2.append("+" + (Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change2.append(UpArrow2);
                }
                if (item.changesPercentage < 0) {
                    document.getElementById("change2").style.color = "#AF0303";
                    $change2.append((Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change2.append(DownArrow2);
                }
            })
        }
    });

    var $change3 = $('#change3');
    $.ajax({
        type: 'GET',
        url: 'https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=c0dabd2d8a382584d2144bdefde830f3',
        success: function (percent) {
            var UpArrow3 = document.createElement('img');
            UpArrow3.src = 'img/UpArrow.png';
            var DownArrow3 = document.createElement('img');
            DownArrow3.src = 'img/DownArrow.png';
            $.each(percent, function (i, item) {
                if (item.changesPercentage > 0) {
                    document.getElementById("change3").style.color = "#17A400";
                    $change3.append("+" + (Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change3.append(UpArrow3);
                }
                if (item.changesPercentage < 0) {
                    document.getElementById("change3").style.color = "#AF0303";
                    $change3.append((Math.round(item.changesPercentage * 100) / 100) + "%" + "\xa0\xa0");
                    $change3.append(DownArrow3);
                }
            })
        }
    });
});