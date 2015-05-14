app.controller('menuController',
    ['$scope','loginService', '$state',function ($scope,loginSvc,$state) {

        function initialize() {
            $scope.menuTemplateUrl =
                "app/templates/menu.html";
            $scope.menuItems = [{ name: "Login", route: "login" },
            {
                name: "Register", route: "register"
            },
            { name: "Home", route: "home" },
            { name: "Vehicle List", route: "vehiclelist" },
            { name: "Reports", route: "reports" }]
            //$scope.menuItems = [
            //    { name: "Login", templateUrl: "app/templates/login.html" },
            //    { name: "Register", templateUrl: "app/templates/register.html" },
            //    { name: "Vehicle List", templateUrl: "app/templates/vehiclelist.html" },
            //    { name: "Reports", templateUrl: "app/templates/reports.html" }
            //];
            //$scope.selectedTemplateUrl = "app/templates/home.html";
            console.log($scope.menuItems);
        }

        $scope.loadView = function (menu) {
            
            $state.go(menu.route);
            //if (loginSvc.isUserAuthenticated()) {
            //    $state.go('vehiclelist');
            ////    $scope.selectedTemplateUrl = menu.templateUrl;
            //}
            //else {
            //    $scope.selectedTemplateUrl = "app/templates/login.html";
            //}
        }
        initialize();

    }]);