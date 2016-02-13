 angular.module('app.profileViewModule', [])
 .controller('profileViewController', function($scope) {
        // create a message to display in our view
        $scope.user = loggedInUser;
    });