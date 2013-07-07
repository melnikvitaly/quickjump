dsApp.factory("settingsService",function(){
   return {
			mode:"new",
			type:""
       };
   }
);

dsApp.factory("descService",function(){
   return {
			pvdprop:function(pvdType,prop){
				if(prop=="name")
					return "name of provider";
				else if(prop=="displayText"){
					return "display text";
				}
				else if(prop=="shortDisplayText"){
					return "short display text";
				}
				else if(prop=="displayText"){
					return "display text";
				}
				else if(pvdType==URLACTION_T)
				{
					if(prop=="actionUrl"){
						return "action url";
					}
					else if(prop="defaultUrl"){
						return "default url";
					}
				}
				return prop + " of "+pvdType;
			},			
       };
   }
);
