var dsApp=angular.module('settingsApp', []).
    config(function($routeProvider) {
        $routeProvider.
            when('/', {controller:ViewCtrl, templateUrl:'tpl/view.html'}).       
            when('/choosenew', {controller:ChoosePvdTypeCtrl, templateUrl:'tpl/choosePvdType.html'}).            
            when('/edit/:id', {controller:EditPvdCtrl, templateUrl:'tpl/editPvd.html'}).
            when('/choosetemplate', {controller:ChooseTemplateCtrl, templateUrl:'tpl/choosetmpl.html'}).
            otherwise({redirectTo:'/'});
    });

dsApp.directive('helpsign', function factory() {
  var directiveDefinitionObject = {    
    replace: false,	
    transclude: false,
    restrict: 'E',
    scope: false,    
    compile: function(element, attrs) {      	
      var el =$('<a class="helpsign"><i class="icon-question-sign"></i></a>');	  
	  el.attr('title',element.text());
      element.replaceWith(el);
	  
	  el.tooltip({placement:"right"});
    },
  };
  return directiveDefinitionObject;
});

dsApp.directive('tooltip', function () {
    return {
        restrict:'A',
        link: function(scope, element, attrs)
        {
            $(element)
                .attr('title',scope.$eval(attrs.tooltip))
                .tooltip({placement: attrs.tooltipPlacement||"right"});
        }
    }
})





