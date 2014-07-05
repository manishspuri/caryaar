'use strict';

angular.module('carYaarApp')
    .controller('homeCtrl', function ($scope, HomeService) {
		
		// $scope.arrowMargin = (window.innerWidth)/2.2;
		// $scope.confvenue = SetData.get_venue_data();

		HomeService.get()
			    .success(function(data){
			    	$scope.cars = data;
			    })

	});