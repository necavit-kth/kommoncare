var loggedInUser;


angular.module('app',[
	'ngRoute',
	'app.homeModule', 
	'app.createChallengeModule', 
	'app.challengeListModule',
	'app.challengeViewModule',
	'app.leaderBoardModule',
	'app.achievementListModule',
	'app.profileViewModule',
	'app.challengeHistoryModule',
	'app.headerModule', 
	'app.footerModule'
	])
.controller('mainController', function($scope, $http) {
		id = "56be644c2c73f39864399e60";
		$http.get("http://kommoncare.davidmr.es/api/users/" +id)
	    .then(function(response) {
	    	loggedInUser = response.data;
	    });
	});