angular.module('app')
.config(function ($routeProvider) {
      $routeProvider
      	.when('/', {
          	templateUrl: 'app/components/home/homeView.html', 
          	controller: 'homeController'
          })

         .when('/user/profile/', {
            templateUrl: 'app/components/user/profile/profileView.html',
            controller: 'profileViewController'
          })
          .when('/user/game/achievements', {
            templateUrl: 'app/components/user/game/achievements/achievementListView.html',
            controller: 'achievementListController'
          })
           .when('/user/game/leaderboard', {
            templateUrl: 'app/components/user/game/leaderBoard/leaderBoardView.html',
            controller: 'leaderBoardController'
          })
        .when('/challenge', {
            templateUrl: 'app/components/challenge/challengeList/challengeListView.html',
            controller: 'challengeListController'
          })
  		  .when('/challenge/challengeList', {
          	templateUrl: 'app/components/challenge/challengeList/challengeListView.html',
          	controller: 'challengeListController'
          })
		    .when('/challenge/challengeView', {
          	templateUrl: 'app/components/challenge/challengeView/challengeView.html',
          	controller: 'challengeViewController'
          })
         .when('/user/challengeHistory', {
            templateUrl: 'app/components/user/challengeHistory/challengeHistoryView.html',
           controller: 'challengeHistoryController'
          })
      	.when('/challenge/createChallenge',{
      		templateUrl: 'app/components/challenge/createChallenge/createChallengeView.html',
      		controller: 'createChallengeController'
      	});
  });