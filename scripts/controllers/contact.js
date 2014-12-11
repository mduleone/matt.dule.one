'use strict';

angular.module("app")
    .controller("ContactController", function ($scope) {
        $scope.contacts = [{
            href: "mailto:matt@duleone.com",
            name: "Email"
        }, {
            href: "https://www.facebook.com/matt.duleone",
            name: "Faceook"
        }, {
            href: "http://twitter.com/Crimyon",
            name: "Twitter"
        }, {
            href: "http://ello.co/mduleone",
            name: "Ello"
        }, {
            href: "http://www.linkedin.com/pub/matt-duleone/10/a65/123",
            name: "LinkedIn"
        }, {
            href: "http://github.com/mduleone",
            name: "GitHub"
        }, {

        }]

    });