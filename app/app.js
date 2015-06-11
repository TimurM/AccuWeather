// 'use strict';

(function() {

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
