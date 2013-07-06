

function getTemplates(){
var res=[
	{
		e:"true",
		t:URLACTION_T,
		id:"fogbugz",
		n:"fogbugz",
		//dT: "Find  Item  on FogBugz",
		dT: "FogBugz. Jump to item ID={0}",
		sDT: "FogBugz",		
		pR: "[0-9]+",		
		pT:"fogbugz",		
		d:"Allows jump to items on fogbugz.com",
		dU: "https://workshare.fogbugz.com",
		aU:"https://workshare.fogbugz.com/?{0}"
	},
	{			
		e:"false",
		t:URLACTION_T,
		id:"workshareGitHub",
		n:"workshareGitHub",
		//dT: "Jump to WSP",
		dT: "WSP. Jump to branch 'task-{0}'",
		sDT: "WSP GitHub",
		aU:"https://github.com/workshare/ws7/commits/task-{0}",
		pR: "[0-9]+",
		dU:"https://github.com/workshare/ws7",
		pT:"workshareGitHub",
		d:"Allows jump to branchs on github.com"
	}
];


return res;
};



