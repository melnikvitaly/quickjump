function PopupController(view)
{
	var self=this;
	this.model=new Models();
	this.view=view;
	view.controller=this;	
	debugger;
	this.onProviderActionClicked = function (provider, param){
		if(provider){
			provider.execute(self.view,[param]);				
		}
	};
	console.log("call init providers");
	this.view.initProviders(this.model.getProviders());
};

