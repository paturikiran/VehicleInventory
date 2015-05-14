

app.service('loginService', ['$http',function ($http) {
    var isAuthenticated;
    return {
        login: function (userName, passWord) {
            if (userName == "kiran" && passWord === "1234") {
                isAuthenticated = true;
            }
            else {
                isAuthenticated = false;
            }
            return isAuthenticated;
        },
        isUserAuthenticated: function () {
            return isAuthenticated;
        },
        loginFromJson: function (username,password) {
            $http.get('app/data/login.json')
                .then(function (response) {
                    if (response.data && response.data.users) {
                        angular.forEach(response.data.users, function (data) {
                            if (data.user.username === username && data.user.password === password) {
                                isAuthenticated = true;


                            }
                        });
                    }
                    return isAuthenticated;
            });
        }
    }
}]);