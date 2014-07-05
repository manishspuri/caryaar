'use strict';

 
angular.module('carYaarApp', ['ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/request/:carId', {
        	controller: 'homeCtrl',
        	templateUrl: 'partials/request.html'
        })
        .when('/register', {
        	controller: 'homeCtrl',
        	templateUrl: 'partials/register.html'
        })
        .otherwise({redirectTo: '/'});
    });