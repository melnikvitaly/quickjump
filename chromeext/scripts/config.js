

function getTemplates(){
var res=[
	{
		e:"true",
		t:URLACTION_T,
		id:"fogbugz",
		n:"fogbugz",
		dT: "Find  Item  on FogBugz",
		fDT: "FogBugz. Jump to item ID={0}",
		sDT: "FogBugz",
		aU:"https://workshare.fogbugz.com/?{0}",
		pR: "[0-9]+",
		dU: "https://workshare.fogbugz.com"
	},
	{
		e:"false",
		t:URLACTION_T,
		id:"workshareGitHub",
		n:"workshareGitHub",
		dT: "Jump to WSP",
		fDT: "WSP. Jump to branch 'task-{0}'",
		sDT: "WSP GitHub",
		aU:"https://github.com/workshare/ws7/commits/task-{0}",
		pR: "[0-9]+",
		dU:"https://github.com/workshare/ws7"
	}
];


return res;
};



