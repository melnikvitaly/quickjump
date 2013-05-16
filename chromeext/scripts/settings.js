function SettingsController($scope){
	var self=this;
	self.model=new Models();
	$scope.save= function(){
		alert("save");
	};
	$scope.getProviders=function(){
		var providers=self.model.getProviders();		
	}	
}

