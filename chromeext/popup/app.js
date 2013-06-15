var dsApp=angular.module('popupApp', ['ui']).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:MainCtrl, templateUrl:'tpl/main.html'}).                   
            otherwise({redirectTo:'/'});
    });