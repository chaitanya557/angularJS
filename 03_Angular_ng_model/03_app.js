// Create an Angular JS Module
var app = angular.module('LoginApp',[]);

// Create a controller
app.controller('LoginAppCtrl',function($scope) {
        $scope.username = null;
        $scope.email = null;
        $scope.password = null;
        $scope.remPassword = null;
});