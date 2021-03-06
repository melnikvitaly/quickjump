dsApp.factory("settingStorage",function($rootScope){
   return new function (){
	var self=this;	
	self.getProviders=function(callback){
				var data=chrome.storage.sync.get("s", function(obj){						
						if(obj.s){							
							callback(providerFactory.createArr(obj.s.providers));
						}
						else{
							callback([]);
						}                
					});			
				
		};
	self.getProviderById=function(pId,callback){							
			self.getProviders(function(arr){				
				callback(Utils.getByProp(arr,"id",pId)); 
			});
	};
	self.getEnabledProviders=function (callback){
		self.getProviders(function(val){			
			callback(val.filter(function (o){
				return o.enabled;
			}));
		});
	},
	self.getTypes=function(callback){
		callback([URLACTION_T]);				
	};
		
	self.saveProvider=function(pvd,callback){
			var data=chrome.storage.sync.get('s',function(val){
					if(val.s && !val.s.providers){
						val.s=null;
					}
					var obj= val.s||{providers:[]};
					var existed=Utils.getByProp(obj.providers,"id",pvd.id);
					if(existed){			
							var index = obj.providers.indexOf(existed);
							obj.providers[index]=pvd.serialize();
					}
					else{										
						obj.providers.push(pvd.serialize());
					}
								
					chrome.storage.sync.set({'s':obj},callback);	
				});								
		},
	self.removeProvider=function(pvd,callback){
			var data=chrome.storage.sync.get('s',function(val){
					if(val.s && !val.s.providers){
						val.s=null;
					}
					var obj= val.s||{providers:[]};
					var existed=Utils.getByProp(obj.providers,"id",pvd.id);				
					if(existed){			
							var index = obj.providers.indexOf(existed);
							obj.providers.splice(index,1);
					}													
					chrome.storage.sync.set({'s':obj},callback);	
				});								
		};
		self.reset=function(callback){
			chrome.storage.sync.clear(callback);								
		}
}});	



