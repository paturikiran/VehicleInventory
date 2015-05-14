app.controller('loginController',
    ['$scope','loginService', function ($scope,loginSvc) {

        function initialize() {
            $scope.user = {
                userName: "",
                passWord: ""
            };
            $scope.successMessage = "";
        }

        $scope.login = function () {
          // var result = loginSvc.loginFromJson($scope.user.userName,
               // $scope.user.passWord);

            var result = loginSvc.login($scope.user.userName,
               $scope.user.passWord);
           if (result) {
               $scope.successMessage = "Welcome to CGI Technologies";
               $scope.selectedTemplateUrl = "app/templates/home.html";
           }
           else {
               $scope.successMessage = "Please check your Credentials";
           }
        }

        initialize();
    }]);