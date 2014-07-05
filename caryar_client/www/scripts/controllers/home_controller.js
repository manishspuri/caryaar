'use strict';

angular.module('carYaarApp')
    .controller('homeCtrl', function ($scope) {
		
		// $scope.arrowMargin = (window.innerWidth)/2.2;
		// $scope.confvenue = SetData.get_venue_data();
		$scope.cars = [
		{
			To: 'Powai',
			From: 'Andheri'
		},
		{
			To: 'Dadar',
			From: 'Bhandup'
		},
		{
      To: 'Bandra',
      From: 'Hiranandani'
		}
		]
	});