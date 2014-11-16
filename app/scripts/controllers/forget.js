'use strict';

/**
 * @ngdoc function
 * @name assisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assisApp
 */
var app=angular.module('assisApp');

  app.controller('ForgetCtrl', function ($scope) {

  	$scope.login=function(){
  		if($scope.user_email=="aravind@gmail.com" && $scope.user_pass=="aravind@gmail.com"){
	  		alert("HI");
	  	}else{
        
      }
  	}
  
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
