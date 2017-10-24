'use strict';

angular.module("app")
    .controller("ContactController", function ($scope) {
        $scope.contacts = [{
            icon: "fa-envelope-o",
            href: "mailto:matt@duleone.com?subject=Hello%20friend!",
            name: "matt@duleone.com"
        }, {
            icon: "fa-facebook",
            href: "https://www.facebook.com/matt.duleone",
            name: "matt.duleone"
        }, {
            icon: "fa-twitter",
            href: "https://twitter.com/Crimyon",
            name: "@Crimyon"
        }, {
            icon: "fa-google-plus",
            href: "https://plus.google.com/113075431950470826421/",
            name: "Matt DuLeone"
        }, {
            icon: "fa-linkedin",
            href: "https://www.linkedin.com/in/matt-duleone/",
            name: "Matt DuLeone"
        }, {
            icon: "fa-github",
            href: "https://github.com/mduleone",
            name: "mduleone"
        }, {
            icon: "fa-globe",
            href: "https://matt.dule.one/",
            name: "matt.dule.one"
        }]

    });