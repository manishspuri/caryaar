'use strict';

angular.module('carYaarApp', ['ngRoute','ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/request', {
        	controller: 'homeCtrl',
        	templateUrl: 'partials/request.html'
        })

        .otherwise({redirectTo: '/'});
    });