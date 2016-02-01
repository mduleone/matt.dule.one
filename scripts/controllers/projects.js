'use strict';

angular.module("app")
    .controller("ProjectsController", function($scope) {
        $scope.projects = [{
            title: "Casino Craps",
            href: "http://duleone.com/craps",
            repo: "https://github.com/mduleone/craps",
            desc: "A frontend implementation of the popular casino table game, Craps! Complete with a tutorial, this is an excellent and fun way to learn to play Craps without the fear of losing your shirt! You start with $10,000, and table stakes allow for you to be as frugal or as extravigant as you wish, allowing bets of all sizes, from $10 to $10,000.",
        }, {
            title: "Make Utterance",
            href: "https://www.npmjs.com/package/make-utterance",
            repo: "https://github.com/mduleone/MakeUtterance",
            desc: "A very basic tool to make creating utterance strings for the Amazon Echo easier.",
        }, {
            title: "Pokedex - Alexa Skill",
            href: "",
            repo: "https://github.com/mduleone/EchoPokedex",
            desc: "A Pokedex skill for the Amazon Echo. Ask Alexa to tell you about any Pokemon in the Pokemon universe.",
        }, {
            title: "Node Poker",
            href: "",
            repo: "https://github.com/mduleone/nodePoker",
            desc: "A Node.js implementation of a poker hand analyzer. Inspired by solving <a href='https://projecteuler.net/problem=54'>Project Euler #54</a> in <a href='https://gist.github.com/mduleone/133c118b8a6c6bb9b624'>COBOL</a> and wanting a more practical api.",
        }, {
            title: "Five Card Draw - Alexa Skill",
            href: "",
            repo: "https://github.com/mduleone/alexaFivecard",
            desc: "A Five Card Draw Poker skill for the Amazon Echo. Ask Alexa to deal you a hand, and then try your best to beat her!<br /><br />Built on top of <a href='#'>Node Poker</a>",
        },]
        // {
        //     title: "Poker",
        //     href: "http://duleone.com/playholdem",
        //     desc: "Pker!!!"
        // },]
    });