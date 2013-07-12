

function getTemplates(){
var res=[
	{
		id:"fogbugz",
		e:"true",
		t:URLACTION_T,
		n:"Fogbugz",		
		dT: "FogBugz. Jump to item ID={0}",
		sDT: "FogBugz",		
		pR: "[0-9]+",		
		pT:"fogbugz",		
		d:"Allows jump to items on fogbugz.com",
		dU: "https://YOURCOMPANY.fogbugz.com",
		aU:"https://YOURCOMPANY.fogbugz.com/?{0}"
	},
	{	
		id:"GitHub",		
		e:"false",
		t:URLACTION_T,
		n:"GitHub",		
		dT: "Jump to branch 'task-{0}'",
		sDT: "GitHub",		
		pR: "[0-9]+",
		aU:"https://github.com/YOURACCOUNT/PROJECT/commits/task-{0}",
		d:"Allows jump to branchs on github.com",
		dU:"https://github.com/",
		pT:"GitHub"		
	},
	{	
		id:"google maps",		
		e:"true",
		t:URLACTION_T,
		n:"Google Maps",		
		dT: "locate on map '{0}'",
		sDT: "locate on map",		
		pR: ".+",
		aU:"https://maps.google.com/maps?q={0}",
		d:"Jumps to objects on google maps",
		dU:"https://maps.google.com/",
		pT:"google maps"		
	},	
	{	
		id:"ex.ua",		
		e:"true",
		t:URLACTION_T,
		n:"ex.ua",		
		dT: "ex.ua '{0}'",
		sDT: "ex.ua",		
		pR: ".+",
		aU:"http://www.ex.ua/search?s={0}",
		d:"Search on ex.ua",
		dU:"http://www.ex.ua/",
		pT:"ex.ua"		
	},	
	{	
		id:"grooveshark.com",
		e:"true",
		t:URLACTION_T,
		n:"GrooveShark",		
		dT: "grooveshark '{0}'",
		sDT: "grooveshark",		
		pR: ".+",
		aU:"http://grooveshark.com/#!/search?q={0}",
		d:"Search on grooveshark.com",
		dU:"http://grooveshark.com",
		pT:"grooveshark.com"		
	}
	
	
];


return res;
};



