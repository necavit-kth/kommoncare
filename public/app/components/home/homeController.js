 angular.module('app.homeModule', [])

.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'HomeController!';
    });