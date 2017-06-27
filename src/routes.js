(function () {
'use strict';

angular.module('app')

.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'appConstants'];
function RoutesConfig($stateProvider, $urlRouterProvider, appConstants) {
  var states = appConstants.views;
  console.log("states: ", states);


  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state(states[0].name, {
    url: '/',
    templateUrl: 'src/templates/' + states[0].name + '.template.html'
    })

    .state(states[1].name, {
      url: '/' + states[1].name,
      templateUrl: 'src/templates/' + states[1].name + '.template.html'
    })

    .state(states[2].name, {
      url: '/' + states[2].name,
      templateUrl: 'src/templates/' + states[2].name + '.template.html'
    });


}


})();
