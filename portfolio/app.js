var myApp = angular.module("myApp", []);

myApp.controller("myAppController", ($scope) => {

    $scope.message= "hey guys";
   
    $scope.names = [
        {
            ninja:"max",
            belt:"green",
            rate:50
        },
        {
            ninja:"grace",
            belt:"red",
            rate:40
        },
        {
            ninja:"kill",
            belt:"green",
            rate:60
        },
        {
            ninja:"james",
            belt:"black",
            rate:30
        }
    ];
});
