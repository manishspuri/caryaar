'use strict';

angular.module('carYaarApp')
    .controller('homeCtrl', function ($scope, HomeService, $location) {
		
		// $scope.arrowMargin = (window.innerWidth)/2.2;
		// $scope.confvenue = SetData.get_venue_data();

		HomeService.get()
			    .success(function(data){
			    	$scope.cars = data;
			    })
    
	    $scope.registerVehicle = function() {
	    	HomeService.registerVehicle($scope.vehicle)
				.success(function(data) {
					HomeService.get()
				    .success(function(data){
				    	$scope.cars = data;
				    	$location.path('/');
				    })
			    })
			    .error(function(err){
			    	console.log(err);
			    });
		};

		$scope.requestCar = function(vehicleId) {
          $location.path('/request/' + vehicleId);
		};   
	});