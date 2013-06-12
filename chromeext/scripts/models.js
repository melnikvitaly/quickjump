function Models(){
	var self=this;
	self._providers=null;
	this.getProviders=function(){
			if(self._providers==null){
				self._providers=[];		
				var providers=getProvidersConfig();
				console.log(providers);
				for(var i in providers){
					var provider=providers[i];
				   if(provider.type=="urlAction"){
					   var provider=new UrlActionProvider(providers[i]);
					   self._providers.push(provider);
					}
				};
			}
			return self._providers;
		};
    this.getTypes=function getKnownActionTypes(){
        return ["urlAction"];
        };
};	



