function MainCtrl($scope, popupService,settingStorage){	
	$scope.providers=[];	
	$scope.param="";
	
	$scope.executePvd = function (provider){		
			provider.execute({params:[$scope.param]});						
	};		
	$scope.executeDefault = function (){		
		$scope.providers[0].execute({params:[$scope.param]});						
	};		
	$scope.refreshProviders=function(){
		settingStorage.getProviders(function(val){
			Utils.apply($scope,function(){
				Utils.syncArrays($scope.providers,val,"id");
			});				
		});
	};
	
	$scope.refreshProviders();	
};

