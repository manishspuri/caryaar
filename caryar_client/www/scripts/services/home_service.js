angular.module('carYaarApp')
	.factory('HomeService', function($http){
		return {
		    get : function() {
		    return $http.get('http://localhost:3000/vehicles.json');
		    },
		    registerVehicle : function(vehicleData) {
		    	return $http ({
	                method: 'POST',
	                url: 'http://localhost:3000/vehicles',
	                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
	                data: $.param(vehicleData)
		    	});
		    },
		    requestVehicle : function(requestVehicleData) {
		    	return $http ({
		    		method: 'POST',
		    		url: 'http://localhost:3000/vehicles/' + requestVehicleData.vehicle_id + '/register',
	                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
	                data: $.param(requestVehicleData)
		    	});
		    }
		}
	});