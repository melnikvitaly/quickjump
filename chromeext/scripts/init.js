console.log("init.js");

var view= new BaseView();	
var controller=new 	EventController(view);

var menus=[];

function onClickHandler(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	
	var providerId=null;
	for(var i in menus){
		if(menus[i]==info.menuItemId){
			providerId=i;
			break;
		}
	}	
	var provider=null;
	var providers=controller.getProviders();
	for(var i in providers){			
			var curProvider=controller.providers[i];				
			if(providerId==curProvider.id){
				provider=curProvider;
				break;
			}
		};
	if(provider){		
		controller.onMenuClicked(provider, {text:info.selectionText});
	}
	else{
		console.log("no provider");
	}
	
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("msg.request = " + msg.request);
  if (msg.request == "updateContextMenu") {    
		console.log("selection = " + msg.selection);
		var providers=controller.getProviders();
		for(var i in providers){
			var provider=providers[i];
			var menuid=menus[provider.id];
			if(menuid){
				chrome.contextMenus.update(menuid, {"title": provider.getMenuDisplayText([msg.selection])});
			}
			else{
				var id = chrome.contextMenus.create({"id":provider.id ,"title": provider.getMenuDisplayText([msg.selection]), "contexts":["all"]});
				menus[provider.id]=id;
			}
		}
    }
    console.log("handling message 'updateContextMenu' done.");
  } 
);