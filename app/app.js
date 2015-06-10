'use strict';

(function() {

    var app = angular.module('AccuWeather', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'WeatherController',
                templateUrl: 'app/view1/weather.html'
            })
            .otherwise( { redirectTo: '/' } );
    });

}());
