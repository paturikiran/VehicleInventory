app.directive('customRegisterDirective', [function () {
    return {
        restrict: "A",
        // template:"<label>First Name</label>"
        templateUrl: 'app/templates/register-address.html',
        //controller: function  ($scope) {
        //    console.log("hello World");
        //}
       // controller: "addressRegistrationController",
        scope: {
            zipcode: "@",
            city:"="

        },
        link: function (scope, element,attrs) {
            console.log(scope.city);
            console.log(scope.zipcode);
            var ele = element.find('button');
            console.log(attrs);
            ele.bind('click', function () {
                scope.$emit('registerEvent');
            });
           
        }
       

    };

}]);


app.directive('parentDirective', function () {
    return {
        restrict: "A",
        template: "<label>{{myAddress.country}}</label>" +
                "<div child-directive></div>",
        link: {
            pre:function(scope,elem,attr){
                scope.myAddress = {};
                //console.log(scope);
                //console.log(elem);
            },
            post: function(scope,elem,attr){
                //console.log("iam the parent post link");
            }    
        }
        

    }
});
app.directive('childDirective', function () {
    return {
        restrict: "A",
        template: "<label>{{address.zip}}</label>",
        link: { pre:function(scope,elem,attr){
           
           // console.log(elem);
        },
            post: function(scope,elem,attr){
               // console.log("iam the child post link");
            }    
        }
        
    }
});
