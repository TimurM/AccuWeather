// 'use strict';

(function() {

    // when you're running unit tests you have to remove chart.js dependency
    var app = angular.module('accuWeather', ['ngRoute', 'chart.js']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'WeatherController',
                templateUrl: '/app/view1/weather.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
