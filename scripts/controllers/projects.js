'use strict';

angular.module("app")
    .controller("ProjectsController", function($scope) {
        $scope.projects = [{
            title: "Casino Craps",
            href: "http://duleone.com/craps",
            desc: "A Front-End implementation of the popular Casino table game, Craps! Complete with a tutorial, this is an excellent and fun way to learn to play Craps without the fear of losing your shirt! You start with $10,000, and table stakes allow for you to be as frugal or as extravigant as you wish, allowing bets of all sizes, from $10 to $10,000."
        },]
        // {
        //     title: "Poker",
        //     href: "http://duleone.com/playholdem",
        //     desc: "Pker!!!"
        // },]
    });