var app = angular.module('myApp', []);

app.config(function () { /*it will start before application runs*/

});

app.run(function () { /*when it runs*/

});


app.controller('myController', ['$scope', function (scope) {

    scope.name = "mgo";
    scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];

    scope.ninjasObj = [
        {
            name: "Yoshi",
            belt: "black",
            available:true
        },
        {
            name: "Crystal",
            belt: "yellow",
            available:true
        },
        {
            name: "Shaun",
            belt: "black",
            available:false
        },
        {
            name: "Ryu",
            belt: "red",
            available:true
        }
    ];

    scope.FilterArray = function (filtered) {
        scope.ninjasObj = scope.ninjasObj.filter(function (iter) {
            return iter.name !== filtered;
        });
    };
}]);