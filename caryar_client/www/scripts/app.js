'use strict';

 
angular.module('carYaarApp', ['ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/view2', {
        	controller: 'homeCtrl',
        	templateUrl: 'partials/view2.html'
        })
        .when('/register', {
        	controller: 'homeCtrl',
        	templateUrl: 'partials/register.html'
        })
        .otherwise({redirectTo: '/'});
    });