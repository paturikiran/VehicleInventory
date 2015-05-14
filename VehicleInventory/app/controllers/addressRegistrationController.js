app.controller('addressRegistrationController', ['$scope',
    function ($scope) {
        $scope.address = {
            city: "New York",
            state: "NY",
            zip: "12345",
            street: "James Street 1234"
        };
    }]);