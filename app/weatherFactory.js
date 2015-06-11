(function() {
    var weatherFactory = function($http) {

        var factory = {};

        factory.getForecast = function(location, num_days){
          return $http.get('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=86be0dbccf2e95c06fbc644c71a22&q='
          + location
          + '&num_of_days='
          + num_days
          + '&tp=24'
          + '&format=json');
      };

        factory.getPastWeather = function(location, start_date, end_date){
          return $http.get('https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=86be0dbccf2e95c06fbc644c71a22&q='
          + location
          + '&date='
          + start_date
          + '&enddate='
          + end_date
          + '&tp=24'
          + '&format=json');
        };

        return factory;
    };

    weatherFactory.$inject = ['$http'];

    angular.module('accuWeather').factory('weatherFactory',
                                           weatherFactory);

}());
