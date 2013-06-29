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
		}
};