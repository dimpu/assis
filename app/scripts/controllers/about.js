'use strict';

/**
 * @ngdoc function
 * @name assisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the assisApp
 */
angular.module('assisApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
