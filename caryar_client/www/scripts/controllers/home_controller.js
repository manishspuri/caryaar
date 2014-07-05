'use strict';

angular.module('carYaarApp')
    .controller('homeCtrl', function ($scope, HomeService) {
		
		// $scope.arrowMargin = (window.innerWidth)/2.2;
		// $scope.confvenue = SetData.get_venue_data();

		HomeService.get()
			    .success(function(data){
			    	$scope.cars = data;
			    })
    
    $scope.registerVehicle = function() {
    	console.log($scope.vehicle)
    	HomeService.registerVehicle($scope.vehicle)
			.success(function(data) {
				HomeService.get()
				    .success(function(data){
				    	$scope.cars = data;
				    })
		    	  $scope.cars = data;
		    })
		    .error(function(err){
		    	console.log(err);
		  });
		};   
	});