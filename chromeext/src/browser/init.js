var injector = angular.injector(['initApp', 'ng']);
var settingsS= injector.get('settingStorage');

var menus=[];

function onClickHandler(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");	
	var providerId=info.menuItemId;	
	settingsS.getProviders(function (val){
		var provider=Utils.getByProp(val,"id",providerId);
		if(provider){		
			provider.execute({params:[info.selectionText]});
		}
		else{
			console.log("no provider");
		}
	});
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.request == "updateContextMenu") {    
		settingsS.getEnabledProviders(function(val){
			var ctx={params:[msg.selection]};
			chrome.contextMenus.removeAll(function(){
				menus.length=0;;
				for(var i in val){
					var provider=val[i];				
					var menuText=provider.getMenuDisplayText(ctx);
					if(menus.indexOf(provider.id)!=-1){
						chrome.contextMenus.update(provider.id, {"title":menuText });
					}
					else{
						chrome.contextMenus.create({"id":provider.id ,"title": menuText, "contexts":["all"]});					;
						menus.push(provider.id);
					}
				}
			});
		});
    }
});