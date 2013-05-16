var BaseView=klass(function ()
{
})
.methods({
	navigateTo : function(url){
		chrome.tabs.create({url:url});	
	}
});
