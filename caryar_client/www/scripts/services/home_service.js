angular.module('carYaarApp')
	.factory('HomeService', function($http){
		return {
		    get : function() {
		    return $http.get('http://172.28.228.35:3000/vehicles.json');
		    },
		    registerCar : function(carRegisterData){
		    	return $http ({
	                method: 'POST',
	                url: 'http://172.28.228.35:3000/vehicle/create',
	                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
	                data: $.param(carRegisterData)
		    	});
		    }
		}
	});