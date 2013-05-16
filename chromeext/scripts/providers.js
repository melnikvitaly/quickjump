var BaseProvider=klass(function(config){
	this.id=config.id;
	this.name=config.name;
	this.displayText=config.displayText;
	this.formatDisplayText=config.formatDisplayText;
	this.shortDisplayText=config.shortDisplayText;
	this._listeners=[];
	this._listeners["onerror"]=[];
})
.methods({
	execute:function(){throw new NotImplException();},
	getMenuDisplayText:function (params){
		var res=this.displayText;
		if(params){
			res=this.formatDisplayText;
			var index=0;
			for(var i in params){
				var param=params[i];
				if(param){
					res=res.replace("{"+index+"}",param);
					index++;
				}
				else{
					res=this.displayText;
				}
			}
		}		
		return res;
	},
	addEventListener:function(eventname,listener){
	
		if(this._listeners[eventname]){
			if(listener){
				this._listeners[eventname].push(listener);
			}
		}
		else{
			throw new Exception("no such event - "+eventname);
		}
	},
	removeEventListener:function(eventname,listener){
	
		if(this._listeners[eventname]){
			if(listener){
				this._listeners[eventName].splice($.inArray(removeItem, y), 1 );
			}
		}
		else{
			throw new Exception("no such event - "+eventname);
		}
	},
	
	raiseError: function(error){
		for(var i in this._listeners["onerror"]){
			var listener=this._listeners["onerror"][i];
			if(listener) listener(this,{message:text});
		}
	}
});

var UrlActionProvider=BaseProvider.extend(function(config){	
	this.actionUrl=config.actionUrl;
	this.paramRegex=config.paramRegex;
	this.defaultUrl=config.defaultUrl;
})
.methods({
	processParams: function (params){
							var res=[];
							for(var i in params){
								var param=params[i];
								if(param){
									res.push(param.match(this.paramRegex));
								}
								else{
									res.push(param);
								}
							}
							return res;
						},
	execute : function(view,params,ctx){
		var processed=this.processParams(params);
		var param=processed[0];
		if(param){
			view.navigateTo(this.actionUrl.replace("{0}",param));
		}
		else{
			view.navigateTo(this.defaultUrl);
		}		
	},
	
	getMenuDisplayText:function(params){		
		var processed=this.processParams(params);
		return this.supr(processed);
	}
	
});

