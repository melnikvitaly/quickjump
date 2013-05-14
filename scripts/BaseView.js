var BaseView=klass(function ()
{
})
.methods({
	createTab : function(url){
		chrome.tabs.create({url:url});	
	}
});
