var app = angular.module('myApp', []);

app.config(function () { /*it will start before application runs*/

});

app.run(function () { /*when it runs*/

});


app.controller('myController', ['$scope',function (scope) {
    scope.name = "mgo";
}]);