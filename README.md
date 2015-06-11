# AccuWeather — Get Accurate Weather anytime, anywhere

This project is an Angular application that displays historical weather as well as a weather forecast for up to 15 days.

You can click here to visit the [Live App.](http://timurmeyster.me/AccuWeather)

##About this App:

###Tech Overview:
* The application is build with [AngularJS](http://angularjs.org/)
* I used [Angular-Seed](https://github.com/angular/angular-seed) as a starting folder primarily because it come with a bunch of development and testing tools
* The app is using World Weather Online [Local Weather API] (http://www.worldweatheronline.com/api/docs/local-city-town-weather-api.aspx) to retrieve Forecasted Weather
* It's also using World Weather Online [Historical Weather API] (http://www.worldweatheronline.com/api/docs/local-city-town-weather-api.aspx) to retrieve Historical Weather
* The unit tests for this application are written in Jasmine and are primarily testing the Controller & Factory functions

###Features Overview:
* The browser utilizes a [Geolocation API](https://developers.google.com/web/fundamentals/device-access/user-location/obtain-location?hl=en#determine-the-users-current-location) to get user's current location
* The user is also able to enter a desired location by either typing a city name, country name, zip code, or geo coordinates
* The AccuWeather app displays up-to-date current city information for the user's location
* It also enables the user to enter specific dates to search for historical weather
* The Application also displays the number of Sunny Days for the time Period (note a rainy day is classified as a day where precipitation is grater than 1mm)
* The Chart also displays max temperature for the time period and precipitation in mm.

###Limitations:
* You can only lookup historical dates for up to 35 days at a time
* I also set a limitation for the user to look back as far as April 2015
* A user can only look up either historical or forecasted API, because the app making 2 seperate calls

###Development Approach
* I've build a custom directive 'ng-currentWeather' to display current weather information
* I'm using a [Angular Chart] (http://jtblin.github.io/angular-chart.js/#getting_started) directive to display the weather information
* I created a weatherFactory to handle to separate requests for past weather information and for the forecasted weather information
* Since I'm building a client-side app and my plan is to host it on github pages, I'm not securing the API Key. (if it was a production app, I would of course do it on the server side)
* I've also have over 10 unit tests to test the functionality of the controller and the weatherFactory that I've written following TTD principals

###Resources used to build this app:

[The Weather API](http://www.worldweatheronline.com/api/docs/local-city-town-weather-api.aspx)
[Angular-seed project]: https://github.com/angular/angular-seed
[AngularJS Unit Testing video]: https://www.youtube.com/watch?v=UDB-jm8MWro
[StackOverflow Article]: http://stackoverflow.com/questions/15924136/test-angularjs-factory-function-with-jasmine
[How to test Controllers]: http://nathanleclaire.com/blog/2013/12/13/how-to-unit-test-controllers-in-angularjs-without-setting-your-hair-on-fire/
[AngularJS docs]: https://docs.angularjs.org/guide/unit-testing
