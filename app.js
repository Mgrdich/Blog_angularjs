var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) { /*it will start before application runs*/

    $routeProvider
        .when('/home', {
            templateUrl: 'view/home.html'
        })
        .when('/directory', {
            templateUrl: "view/directory.html",
            controller: "myController"
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

    http.get({
            method: 'GET',
            url: "data/data.json",
        }
    ).then(
            function (data) {
                console.log(data);
                scope.ninjasObj = data
            }
        );

    /*
        scope.ninjasObj = [
            {
                'name': "Yoshi",
                'belt': "black",
                'available':true
            },
            {
                'name': "Crystal",
                'belt': "yellow",
                'available':true
            },
            {
                'name': "Shaun",
                'belt': "black",
                'available':false
            },
            {
                'name': "Ryu",
                'belt': "red",
                'available':true
            }
        ];
    */

}]);