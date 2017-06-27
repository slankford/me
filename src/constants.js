(function () {
'use strict';

angular.module('app')

.constant('appConstants', {
  "bossMan": {
    name: "silas lankford",
    img: "images/bossman.jpg",
  },
  "views": [
    { name: "me" },
    { name: "work" },
    { name: "more" }
  ]
});


})();
