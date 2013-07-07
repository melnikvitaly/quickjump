

function getTemplates(){
var res=[
	{
		id:"fogbugz",
		e:"true",
		t:URLACTION_T,
		n:"fogbugz",		
		dT: "FogBugz. Jump to item ID={0}",
		sDT: "FogBugz",		
		pR: "[0-9]+",		
		pT:"fogbugz",		
		d:"Allows jump to items on fogbugz.com",
		dU: "https://workshare.fogbugz.com",
		aU:"https://workshare.fogbugz.com/?{0}"
	},
	{	
		id:"workshareGitHub",		
		e:"false",
		t:URLACTION_T,
		n:"workshareGitHub",		
		dT: "WSP. Jump to branch 'task-{0}'",
		sDT: "WSP GitHub",		
		pR: "[0-9]+",
		aU:"https://github.com/workshare/ws7/commits/task-{0}",
		d:"Allows jump to branchs on github.com",
		dU:"https://github.com/workshare/ws7",
		pT:"workshareGitHub"		
	},
	{	
		id:"google maps",		
		e:"true",
		t:URLACTION_T,
		n:"google maps",		
		dT: "locate '{0}'",
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
	}
	
];


return res;
};



