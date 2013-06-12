function ViewCtrl($scope,providersService){
    var self=this;
    $scope.save= function(){
        alert("save");
    };
    $scope.addNewPvd=function(){
        window.location = "#/choosenew";
    }
    $scope.edit=function(pvd){
        window.location="#/editpvd/"+pvd.id;
    }
    $scope.providers=providersService.providers;

}
function ChoosePvdTypeCtrl($scope){
    this.model=new Models();
    $scope.types=this.model.getTypes();
    $scope.select=function(type){
        window.location = "#/createpvd/"+type;
    }
    $scope.back=function(){
        window.location = "#/";
    }
}

function EditPvdCtrl($scope,$routeParams){
    this.model=new Models();
    $scope.isNew=$routeParams.type!==undefined;
    $scope.back=function(){
            if($scope.isNew){
                window.location = "#/choosenew";
            }
            else{
                window.location = "#/";
            }
        }
    $scope.save=function(){
        window.location = "#/";
    }
}