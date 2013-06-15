dsApp.factory("settingStorage",function($rootScope){
   return new function (){
	var self=this;
	//chrome.storage.sync.clear();
	self.wrap=function(providers){
		var res=[];
		for(var i in providers){
			var pvd=providers[i];
			if(pvd.t==URLACTION_T){
				res.push(new UrlActionProvider(pvd));
			}
		}
		return res;
	}
	
	self.getProviders=function(callback){
				var data=chrome.storage.sync.get("s", function(obj){						
						if(obj.s){							
							callback(self.wrap(obj.s.providers));
						}
						else{
							callback([]);
						}                
					});			
				
		};
		self.getTypes=function(callback){
			callback([URLACTION_T]);				
		};
		
	self.saveProvider=function(pvd){
			var data=chrome.storage.sync.get('s',function(val){
					if(val.s && !val.s.providers){
						val.s=null;
					}
					var obj= val.s||{providers:[]};
					var existed=Utils.getByProp(obj.providers,"id",pvd.id);
					if(existed){			
							var index = obj.providers.indexOf(existed);
							obj.providers.splice(index, 1);
					}						
					
					obj.providers.push(pvd.serialize());
								
					chrome.storage.sync.set({'s':obj});	
				});								
		}
		
		var providers=getProvidersConfig();
		for(var i in providers){
			var provider=providers[i];
		    if(provider.t==URLACTION_T){
			  this.saveProvider(new UrlActionProvider(providers[i]));
			}
		};
}});	



