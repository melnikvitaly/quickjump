function ViewCtrl($scope,settingStorage,settingsService){    
	$scope.providers=[];
	
    $scope.addNewPvd=function(){
		settingsService.mode="new";
        window.location = "#/choosenew";
    }
    $scope.edit=function(pvd){
		settingsService.mode="edit";
		settingsService.editId=pvd.id;
        window.location="#/editpvd";
    };
	$scope.refreshProviders=function(){
		settingStorage.getProviders(function(val){
			Utils.apply($scope,function(){
				Utils.syncArrays($scope.providers,val,"id");
			});				
		});
	};
	
	$scope.refreshProviders();
}
function ChoosePvdTypeCtrl($scope,settingStorage,settingsService){
    $scope.types=[];
	
    $scope.select=function(type){
		settingsService.type=type;
        window.location = "#/createpvd";
    }
    $scope.back=function(){
        window.location = "#/";
    }
	$scope.refreshTypes=function(){
		settingStorage.getTypes(function(val){
			Utils.apply($scope,function(){
				Utils.syncArrays($scope.types,val);
			});
		});
	}
	
	$scope.refreshTypes();
}

function EditPvdCtrl($scope,settingsService){    
    $scope.isNew=settingsService.mode!="edit";
    $scope.back=function(){
            if($scope.isNew){
                window.location = "#/choosenew";
            }
            else{
                window.location = "#/";
            }
        }
    $scope.save=function(){
        window.location = "#/";
    }
}