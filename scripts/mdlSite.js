'use strict';

angular.module('mdlSite', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mdlHomeController'
            })
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'mdlProjectsController'
            })
            .when('/resume', {
                templateUrl: 'views/resume.html',
                controller: 'mdlResumeController'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'mdlContactController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);