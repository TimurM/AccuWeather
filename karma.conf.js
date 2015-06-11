module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/scripts/moment.min.js',
      'app/app.js',
      '/app/bower_components/Chart.js/Chart.js',
      '/app/bower_components/angular-chart.js/dist/angular-chart.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'app/weatherFactory.js',
      'app/directives/currentWeather.js',
      'app/directives/currentWeather_test.js'
    ],

    preprocessors: {
      "directives/currentWeather.html": ["ng-html2js"]
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
