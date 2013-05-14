function PopupController(view)
{
	this.model=new Models();
	this.view=view;
	view.controller=this;	
	
	this.onProviderActionClicked = function (provider, param){
		if(param){
			var link=provider.getActionUrl(param);	
			view.createTab(link);
		}
	};
	
	this.view.initProviders(this.model.providers);
};

