var app = angular.module('myApp', ['ngRoute','ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) { /*it will start before application runs*/

    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html',
            controller: "myController"
        })
        .when('/directory', {
            templateUrl: "view/directory.html",
            controller: "myController"
        })
        .when('/contact',{
            templateUrl: "view/contact.html",
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

app.run(function () { /*when it runs*/

});


app.controller('myController', ['$scope', '$http', function (scope, http) {

    scope.FilterArray = function (filtered) {
        scope.ninjasObj = scope.ninjasObj.filter(function (iter) {
            return iter.name !== filtered;
        });
    };

    scope.addNinja = function () {
        /*console.log(scope.newNinja);*/
        scope.newNinja.available = true;
        scope.ninjasObj.push(scope.newNinja);
        scope.newNinja = {};//to clear the current shits in the
    };


    scope.name = "mgo";
    scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];

    http({
            method: 'GET',
            url: "data/data.json",
        }
    ).then(
            function (da) {
                console.log(da);
                scope.ninjasObj = da.data
            }
        );


    scope.removeAll = function () {
     scope.ninjasObj.length = 0;
    };

}]);


app.directive('randomPerson',[function () {
    return {
        restrict:'EA',//element or attribute
        scope : {
            ninjas:'=',
            title:'='
        },
        templateUrl:"view/random.html",
        transclude:true,//so we can put child within it
        controller: function ($scope) {
            $scope.random = Math.floor(Math.random()*4);
        },
        //replace:true //to replace the custom directive with taag with outermost tag of that html

    };
}]);