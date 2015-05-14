app.controller('vehicleListController', ['$scope','vehicleListService',
    function ($scope, vehicleListService) {

        function init() {
            $scope.vehicles = vehicleListService.getVehicles();
        }

        init();
    }]);