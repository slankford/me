(function () {
'use strict';

angular.module('app') //'ui.router'

.controller('MainController', MainController);

MainController.$inject = ['$scope', '$filter', 'appConstants'];
function MainController($scope, $filter, appConstants) {
  var ctrl = this;
  console.log(appConstants);
  ctrl.bossMan = appConstants.bossMan;
  console.log("bossMan: ", ctrl.bossMan);
  ctrl.views = appConstants.views;

  ctrl.toggleView = function(view) {
    console.log("ToggleView: " + view.name);
    if (ctrl.views.indexOf(view) !== -1) {
      ctrl.activeView = view.name;
    }
  }

  ctrl.getTemplate = function(view) {
    return "src/" + $filter('lowercase')(view.name) + ".template.html"; //filter isn't needed, but i like it :)
  }


} //MainController end


})();
