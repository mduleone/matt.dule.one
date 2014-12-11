'use strict';

angular.module("app")
    .controller("HeaderController", function($scope) {
        $scope.navLinks = [{
            href: "/#/",
            name: "Home"
        }, {
            href: "/#/projects",
            name: "Projects"
        }, {
            href: "/#/resume",
            name: "Resume"
        }, {
            href: "/#/contact",
            name: "Contact"
        }];
    });