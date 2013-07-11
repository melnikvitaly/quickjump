var Utils={
	getByProp:function(arr,prop,value){
		for(var i in arr)		{
			var obj=arr[i];
			if(obj[prop]==value)
				return obj;
		}
		return null;
	},
	
	apply:function ($scope,fn){
			if(!$scope.$$phase) {
				$scope.$apply(fn);
			}
			else{
				fn();
			}
		},
	
	syncArrays:function(main, newer,prop){
			main.length=0;
			for(var i in newer){
				main.push(newer[i]);
			}
		},
			

	 guid: function() {
				function s4() {
				  return Math.floor((1 + Math.random()) * 0x10000)
							 .toString(16)
							 .substring(1);
				};
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				 s4() + '-' + s4() + s4() + s4();
		}
};