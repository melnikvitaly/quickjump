var PopupView=BaseView.extend(function(){
$(document).keypress(function(evett){
	var ENTER_CODE=13;
	if(event.which==ENTER_CODE){
		$("#buttons-contaner button:first").click();
	}
})
}).
methods({
	initProviders : function(providers)
		{
		var self=this;
			var buttonsContainer=$("#buttons-contaner");
			for(var i in providers){
				var provider=providers[i];
				var goButton=$("<button type='button'/>").html(provider.name);
				
				goButton.click(function(){
					var param=$("#parametertext").val();
					self.controller.onProviderActionClicked(provider,param);
					
				})
				buttonsContainer.append(goButton);
			}
		}
});


$(document).ready(function(){	
	this.view=new PopupView();
	this.controller=new PopupController(this.view);
	$("#parametertext").focus();
});