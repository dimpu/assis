'use strict';

/**
 * @ngdoc function
 * @name assisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assisApp
 */
angular.module('assisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
