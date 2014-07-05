angular.module('carYaarApp')
	.factory('HomeService', function($http){
		return {
		    get : function() {
		    return $http.get('http://172.28.228.35:3000/vehicles.json');
		    },
		    registerVehicle : function(vehicleData){
		    	return $http ({
	                method: 'POST',
	                url: 'http://172.28.228.35:3000/vehicles/create',
	                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
	                data: $.param(vehicleData)
		    	});
		    }
		}
	});