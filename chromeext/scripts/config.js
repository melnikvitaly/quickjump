console.log("config.js");
function getProvidersConfig(){
var res=[
	{
		type:"urlAction",
		id:"fogbugz",
		name:"fogbugz",
		displayText: "Find  Item  on FogBugz",
		formatDisplayText: "FogBugz. Jump to item ID={0}",
		shortDisplayText: "FogBugz",
		actionUrl:"https://workshare.fogbugz.com/?{0}",
		paramRegex: /[0-9]+/,
		defaultUrl: "https://workshare.fogbugz.com"
	},
	{
		type:"urlAction",
		id:"workshareGitHub",
		name:"workshareGitHub",
		displayText: "Jump to WSP",
		formatDisplayText: "WSP. Jump to branch 'task-{0}'",
		shortDisplayText: "WSP GitHub",
		actionUrl:"https://github.com/workshare/ws7/commits/task-{0}",
		paramRegex: /[0-9]+/,
		defaultUrl:"https://github.com/workshare/ws7"
	}
];
return res;};

