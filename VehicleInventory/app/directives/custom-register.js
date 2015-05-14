app.directive('customRegisterDirective', [function () {
    return {
        restrict: "A",
        // template:"<label>First Name</label>"
        templateUrl: 'app/templates/register-address.html',
        //controller: function  ($scope) {
        //    console.log("hello World");
        //}
        controller: "addressRegistrationController",
        link: function (scope, element,attrs) {
            var ele = element.find('button');
            console.log(attrs);
            ele.bind('click', function () {
                console.log("i am clicked");
            });
           
        }

    };

}]);


app.directive('parentDirective', function () {
    return {
        restrict: "A",
        template: "<label>{{address.city}}</label>" +
                "<div child-directive></div>",
        link: {
            pre:function(scope,elem,attr){
                //console.log(scope);
                console.log(elem);
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
            //console.log(scope);
            console.log(elem);
        },
            post: function(scope,elem,attr){
               // console.log("iam the child post link");
            }    
        }
        
    }
});
