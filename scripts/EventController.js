function EventController(view){	
	var self=this;
	this.model=new Models();	
	this.providers=this.model.providers;
	this.view=view;
	view.controller=this;
	this.onMenuClicked=function(provider,selection){
		var link=provider.getActionUrl(selection.text)
		view.createTab(link);
	};
}