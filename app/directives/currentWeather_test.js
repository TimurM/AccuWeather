// describe('Unit testing current weather directive', function() {
//   var element, scope, $compile;
//
//   beforeEach(module('accuWeather'));
//   beforeEach(module('directives/currentWeather.html'));
//
//   beforeEach(inject(function(_$compile_, $rootScope){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     scope = $rootScope.$new();
//     $compile = _$compile_
//   }));
//
//   it('Displays Directives Header', function() {
//     scope.address = {
//            address1: '',
//            address2: null,
//            city: '',
//            state: null,
//            zip: ''
//        };
//
//     element = angular.element('<current-weather datasource="currentWeather"></current-weather>');
//     $compile(element)(scope);
//     scope.$digest();
//     var isoScope = element.isolateScope();
//     expect(isoScope.address.address1).toBe('');
//     expect(isoScope.addressEmpty).toBe(true);
//     expect(isoScope.hasZipSeparator).toBe(false);
//     // expect(element.html()).toContain("Weather in your city");
//   });
// });
