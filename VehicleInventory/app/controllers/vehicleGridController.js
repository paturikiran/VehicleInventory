/**
 * Created by aalap on 14-05-2015.
 */
app.controller('vehicleGridController', ['$scope','vehicleServiceWithPromise',
    function ($scope, vehicleSvc) {

        function init() {
             vehicleSvc.getVehicles().then(function(response){
                 if(response.status==200){
                        $scope.vehicles = response.data;
                 }
                 else{
                     $scope.showError="Something went Wrong";
                 }
             })
        }

        init();
    }]);