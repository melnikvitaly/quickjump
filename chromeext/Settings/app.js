var dsApp=angular.module('settingsApp', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:ViewCtrl, templateUrl:'tpl/view.html'}).
       /*     when('/edit/:projectId', {controller:EditCtrl, templateUrl:'detail.html'}).*/
            when('/choosenew', {controller:ChoosePvdTypeCtrl, templateUrl:'tpl/choosePvdType.html'}).
            when('/createpvd', {controller:EditPvdCtrl, templateUrl:'tpl/editPvd.html'}).
            when('/editpvd/:id', {controller:EditPvdCtrl, templateUrl:'tpl/editPvd.html'}).
            otherwise({redirectTo:'/'});
    });

dsApp.directive('myHtml', function () {
    return function (scope, element, attrs) {
        element.html(attrs.myHtml);
        scope.$watch(attrs.myHtml, function (value) {
           element.html(attrs.myHtml);
        });
    }
});



