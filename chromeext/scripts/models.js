function Models(){
	var self=this;
	this.getProviders=function(){
                var _res=[];
				var providers=getProvidersConfig();
				for(var i in providers){
					var provider=providers[i];
				   if(provider.type=="urlAction"){
					   res.push(new UrlActionProvider(providers[i]));
					}
				};
			return res;
		};
    this.getTypes=function getKnownActionTypes(){
        return ["urlAction"];
        };
};	



