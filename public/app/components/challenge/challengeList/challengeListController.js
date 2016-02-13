 
 angular.module('app.challengeListModule', [])
 .controller('challengeListController', function($scope, $http) {

		$http.get("http://kommoncare.davidmr.es/api/challenges/")
	    .then(function(response) {
	    	$scope.challenges = response.data;
	    });
    });