 angular.module('app.challengeViewModule', [])
 .controller('challengeViewController', function($scope, $http) {
        var id = url.substring(url.lastIndexOf('/') + 1);
		$http.get("http://kommoncare.davidmr.es/api/challenges/"+id)
	    .then(function(response) {
	    	$scope.challenge = response.data;
	    });
    });