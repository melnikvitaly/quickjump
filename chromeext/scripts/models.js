function Models(){
	this.providers=providers;
	
	this._configProviders=function Config(providers){
	 for(var i in providers){
	   var provider=providers[i];
	   provider.getActionUrl=function(param){
		return provider.goStr.replace("{0}",param);
	   };
	 }
	}
	
	this._configProviders(this.providers);
}