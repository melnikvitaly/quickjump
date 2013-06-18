function ViewCtrl($scope,settingStorage,settingsService){    
	$scope.providers=[];
	
    $scope.addNewPvd=function(){
		settingsService.mode="new";
        window.location = "#/choosenew";
    }
    $scope.edit=function(pvd){
		settingsService.mode="edit";		
        window.location="#/editpvd/"+pvd.id;
    };
	$scope.refreshProviders=function(){
		settingStorage.getProviders(function(val){
			Utils.apply($scope,function(){
				Utils.syncArrays($scope.providers,val,"id");
			});				
		});	
	};
	
	$scope.clearAll=function(){
			chrome.storage.sync.clear();
			$scope.refreshProviders();
		};
		
	$scope.populate=function(){
			var providers=getTemplates();			
			function save(index){
				if(index>=	providers.length){
					$scope.refreshProviders();
					return;
				}
				var provider=providers[index];
				if(provider.t==URLACTION_T){
				  settingStorage.saveProvider(new UrlActionProvider(provider),function(){
					save(index+1);
				  });				
				}
			};
			save(0);
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

function EditPvdCtrl($scope,settingsService,settingStorage,$routeParams){    
	var pId=$routeParams.id;    
    $scope.back=function(){            
                window.location = "#/";            
        }
	
	settingStorage.getProviders(function (val){
		var res=Utils.getByProp(val,"id",pId);
		if(res){
			Utils.apply($scope,function(){
				$scope.provider=res;
			});
		}
		else{
			alert("no pvd with " + pId);
		}
	});
	
    $scope.save=function(){
		settingStorage.saveProvider($scope.provider,function(){
			window.location = "#/";
		});        
    }
}