dsApp.factory("providersService",function(){
   return new function(){
            var model=new Models();
            this.Refresh=function (){
                    this.providers=model.getProviders();
                };
            this.Refresh();
       }
   }
)
