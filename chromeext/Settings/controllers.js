
function ViewCtrl($scope, settingStorage,settingsService){    
	$scope.providers=[];
	
    $scope.addNewCustomPvd=function(){
		settingsService.mode="new";
        window.location = "#/choosenew";
    },
    $scope.addNewPvd=function(){
		window.location = "#/choosetemplate";
    }
    $scope.edit=function(pvd){
		settingsService.mode="edit";		
        window.location="#/edit/"+pvd.id;
    };
    $scope.remove=function(pvd){
		settingStorage.removeProvider(pvd,function(){
			$scope.refreshProviders();
		});		        
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

function EditPvdCtrl($scope,$routeParams,settingStorage){
	var pId=$routeParams.id;    
	    
	$scope.save=function(provider){
		if(!form.$invalid)		{
			settingStorage.saveProvider(provider,function(){
				window.location = "#/";
			});
		}        
    }
    $scope.back=function(){window.location = "#/";};
	
	settingStorage.getProviderById(pId,function (val){		
		if(val){
			Utils.apply($scope,function(){
				$scope.provider=val;
				$scope.$parent.pagetitle='Edit page for '+val.name;
				$scope.editUrl=Conf.pvdTypes[val.type].editUrl;				
			});
		}		
	});
	
    
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

function ChooseTemplateCtrl($scope,settingStorage){
	$scope.providers=providerFactory.create(getTemplates());
	
	$scope.back=function(){window.location = "#/";};	
	$scope.select=function(pvd){
		pvd.pT=pvd.id;
		pvd.id=Utils.guid();
		pvd.enabled=true;		
		settingStorage.saveProvider(pvd,function(){
			window.location = "#/";
		});		
	}	
}