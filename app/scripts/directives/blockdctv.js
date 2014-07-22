'use strict';

angular.module('angularAppTestGeneratorApp')
  .directive('blockdctv', function ($timeout) {
    return {
      
      restrict: 'E',
      transclude: true,
      templateUrl:'views/partials/blockdctv.html',
      
      controller: function($scope){
      	$scope.percents = 50;
      },

      link: function(scope, element, attrs){

      	scope.$watch('percents', function(){

      		$timeout(function(){

      			var val = parseInt(scope.percents);

				var circle = angular.element('#bar');
				  
				if (isNaN(val)) {
				  val = 0; 
				}
				else{
				    var r = circle.attr('r');
				    var c = Math.PI*(r*2);
				   
				    if (val < 0) { val = 0;}
				    if (val > 100) { val = 100;}
				    
				    var pct = ((100-val)/100)*c;
				    
				    circle.css({ strokeDashoffset: pct});
				    
				    $('#cont').attr('data-pct',val);
				}

      		}, 500);

      	});
      }
    };
});
/*
angular.module('angularAppTestGeneratorApp')
	.directive('circle', function($timeout){
		return{

			restrict: "A",
			require: "^blockdctv",

			link: function(scope, element, attrs, ctrl){

			}


		}
	})*/
