(function() {
    var weatherFactory = function($http) {

        var factory = {};

        factory.getForecast = function(location, num_days){
            return;
        };

        factory.pastWeather = function(location, start_date, end_date){
            return;
        };

        return factory;
    };

    weatherFactory.$inject = ['$http'];

    angular.module('accuWeather').factory('weatherFactory',
                                           weatherFactory);

}());
