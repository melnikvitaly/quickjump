var URLACTION_T="urlAction";
var BaseProvider=klass(function(config){
	this.id=config.id;
	this.name=config.n;
	this.displayText=config.dT;
	this.formatDisplayText=config.fDT;
	this.shortDisplayText=config.sDT;
	this.type=config.t
	this.enabled=config.e=="true";
})
.methods({
	serialize:function(){
			var res={};
			res.id=this.id;
			res.t=this.type
			res.n=this.name;
			res.dT=this.displayText;
			res.fDT=this.formatDisplayText;
			res.sDT=this.shortDisplayText;
			res.e=this.enabled?"true":"false";
			return res;
		},
		
	getMenuDisplayTextInternal:function (params){
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
	}
});

var UrlActionProvider=BaseProvider.extend(function(config){	
    
	this.actionUrl=config.aU;
	this.paramRegex=config.pR;
	this.defaultUrl=config.dU;
})
.methods({
serialize:function(){
		var res=this.supr();
		res.aU=this.actionUrl;
		res.pR=this.paramRegex;
		res.dU=this.defaultUrl;
		return res;
	},
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
	execute : function(ctx){
		var processed=this.processParams(ctx.params);
		var param=processed[0];
		var url="";
		if(param){
			url=this.actionUrl.replace("{0}",param);
		}
		else{
			url=this.defaultUrl;
		}		
		chrome.tabs.create({url:url});	
	},
	
	getMenuDisplayText:function(ctx){		
		var processed=this.processParams(ctx.params);
		return this.getMenuDisplayTextInternal(processed);
	}
});

