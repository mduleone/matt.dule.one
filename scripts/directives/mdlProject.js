'use strict';

angular.module('app')
    .directive('mdlProject', function () {
        return {
            restrict: 'AE',
            templateUrl: 'scripts/directives/templates/project.html',
            // scope: {
            //     proj.title: '@title',
            //     proj.link: '@link',
            //     proj.desc: '@desc'
            // }
        }
    })