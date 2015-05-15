var app = angular.module('vehicle.inventory', ['ui.router','ui.grid','ui.grid.pagination']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
    urlRouterProvider) {
    urlRouterProvider.otherwise('/home');
    var home = {
        url: "/home",
        templateUrl: "app/templates/home.html"
    };
   /* var vehicleList = {
        url: "/vehiclelist",
        templateUrl: "app/templates/vehicleGrid.html",

    };*/
    var vehicleGrid = {
        url: "/vehicleGrid",
        templateUrl: "app/templates/vehicleGrid.html",
        controller:'vehicleGridController'
    };
    var register = {
        url: "/register",
        templateUrl: "app/templates/register.html"
    };
    var login = {
        url: "/login",
        templateUrl: "app/templates/login.html"
    };
    var reports = {
        url: "/reports",
        templateUrl: "app/templates/reports.html"
    };
    $stateProvider.state('home', home);
    //$stateProvider.state('vehiclelist', vehicleList);
    $stateProvider.state('register', register);
    $stateProvider.state('login', login);
    $stateProvider.state('reports', reports);
    $stateProvider.state('vehicles',vehicleGrid);
   
}]);
