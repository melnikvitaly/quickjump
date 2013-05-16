function EventController(view){	
	var self=this;
	this.model=new Models();	
	this.providers=this.model.getProviders();
	this.view=view;
	view.controller=this;
	this.onMenuClicked=function(provider,selection){		
		provider.execute(self.view,[selection.text])		
	};
	this.getProviders=function(){return self.providers;};
}