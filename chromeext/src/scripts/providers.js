var URLACTION_T="jump to url";
var Conf={
	pvdTypes:[],
	regType : function(type,ctor,editTmpl){	
	if(Conf.pvdTypes[type]) throw "already registered "+type;
	Conf.pvdTypes[type]={ctor:ctor, editUrl:editTmpl};
}};
var BaseProvider=klass(function(config){
	this.id=config.id;
	this.name=config.n;
	this.displayText=config.dT;
	this.description=config.d;
	this.shortDisplayText=config.sDT;
	this.type=config.t
	this.enabled=config.e=="true";
	this.protoId=config.pT;
})
.methods({
	serialize:function(){
			var res={};
			res.id=this.id;
			res.t=this.type
			res.n=this.name;
			res.dT=this.displayText;		
			res.sDT=this.shortDisplayText;
			res.e=this.enabled?"true":"false";
			res.pT=this.protoId;
			res.d=this.description;
			return res;
		},	
		
	getMenuDisplayTextInternal:function (params){
		var res=this.displayText;
		if(params){
			//res=this.displayText;
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

var providerFactory={
	createArr: function (dataArr){
		var res=[];
		for(var i in dataArr){
			var data=dataArr[i];
			var pvd=this.createObj(data);
			if(pvd){			
				res.push(pvd);
			}				
		}
		return res;
	},
	createObj: function (data){
		var regInfo=Conf.pvdTypes[data.t];		
		if(regInfo){                      
			return new regInfo.ctor(data);
		}					
		return null;
	},
	create:function(obj){
		if(obj instanceof Array){
			return this.createArr(obj);
		}
		else{
			return createObj(obj);
		}
	},
	createCustom:function(type){
		var regInfo=Conf.pvdTypes[type];		
		if(regInfo){                      
			var obj= new regInfo.ctor(
				{
					id:Utils.guid(),
					t:type,
					pT:"",
					dT:"custom provider",
					sDT:"custom",
					n:'custom provider',					
				});
			
			return obj;
		}					
		return null;
	}
};	

Conf.regType(URLACTION_T,UrlActionProvider,'/settings/urlAction/tpl/editPvd.html');
