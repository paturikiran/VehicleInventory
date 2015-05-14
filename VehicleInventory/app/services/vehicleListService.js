

app.service('vehicleListService', ['$http', function ($http) {
    return {
        getVehicles: function () {
            //var url = 'app/data/vehicles.json';
            //$http.get(url).then(function (response) {
            //    console.log(response.data);
            //    return response.data.vehicles;
            //});
            var list = {
                "vehicles": [
                    { "year": 1995, "make": "Maruti", "model": "800","price":1000 ,"releaseDate":"31/12/1995"},
                    { "year": 1996, "make": "Maruti", "model": "Zen", "price": 2000, "releaseDate": "31/12/1996" },
                    { "year": 1997, "make": "Honda", "model": "City", "price": 3000, "releaseDate": "31/12/1997" },
                    { "year": 2000, "make": "Maruti", "model": "Wagonr", "price": 4000, "releaseDate": "31/12/1999" },
                    { "year": 2001, "make": "Audi   ", "model": "A5", "price": 5000, "releaseDate": "31/12/2000" }

                ]
            };
            console.log(list);
            return list.vehicles;
        }
    }

}]);