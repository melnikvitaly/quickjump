console.log("init.js");

var view= new BaseView();	
var controller=new 	EventController(view);

chrome.runtime.onInstalled.addListener(function(){
	for(var i in providers){
		var provider=controller.providers[i];	
		var id = chrome.contextMenus.create({"id":provider.id ,"title": provider.name, "contexts":["selection"]});
	}});
// The onClicked callback function.
function onClickHandler(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	var provider=null;
	for(var i in controller.providers){
			provider=controller.providers[i];				
		};
	if(provider){		
		controller.onMenuClicked(provider, {text:info.selectionText});
	}
	else{
		console.log("no provider");
	}
	
};

chrome.contextMenus.onClicked.addListener(onClickHandler);