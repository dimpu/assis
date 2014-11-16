'use strict';

/**
 * @ngdoc function
 * @name assisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assisApp
 */
var app=angular.module('assisApp');

  app.controller('LoginCtrl', function ($scope) {

  	$scope.login=function(){
  		if($scope.user_email=="aravind@gmail.com" && $scope.user_pass=="aravind@gmail.com"){
	  		alert("HI");
	  	}else{
	  		alert("NO");
	  		$scope.animate_class="pulse";
	  	}
  	}
  
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
  });
