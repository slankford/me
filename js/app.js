(function () {
'use strict';

angular.module('app', [])

.controller('MainController', MainController)
.controller('NavigationController', NavigationController);


MainController.inject = ['$scope'];
function MainController($scope) {
  $scope.menu = [
    "Home",
    "About",
    "Bonus"
  ];


  $scope.name = "asdf";
} //MainController end

// NavigationController.inject = ['$scope'];
function NavigationController() {
  var nav = this;
  nav.views = [
    "First",
    "History",
    "The first"
  ];

  nav.activeView = nav.views[0];

  nav.toggleView = function(view) {
    console.log("ToggleView: " + view);
    if (nav.views.indexOf(view) !== -1) {
      nav.activeView = view;
    }
  }

} //NavigationController end


})();
