var Exception=klass(function(message){
	this.message=message||"unknown error";
});

var NotImplException=Exception.extend(function(message){
	this.supr(message||"not implemented");
});

var WrongProviderArgumentsException=Exception.extend(function(message){
	this.supr(message||"wrongArguments");
});