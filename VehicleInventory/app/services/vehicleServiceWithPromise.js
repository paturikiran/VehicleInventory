/**
 * Created by aalap on 14-05-2015.
 */

app.service('vehicleServiceWithPromise', ['$http','$q',
    function ($http,$q) {
    return {
        getVehicles: function(){
            var dfd = $q.defer();
             $http.get('app/data/vehicles.json').then(
                 function(response) {
                     if(response.status==200) {
                         dfd.resolve(response);
                     }
                     else{
                         dfd.reject(response);
                     }

                 }
             );
            return dfd.promise;
        }
    }
    }]);