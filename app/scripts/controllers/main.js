'use strict';

angular.module('angularAppTestGeneratorApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    
  	$scope.ref = function(){

  		

  		$timeout(function(){
  			console.log('ref scroll');
  			 $scope.$broadcast('rebuild:me');

  		}, 2000);

  	};



  });
