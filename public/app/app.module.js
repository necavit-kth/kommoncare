var loggedInUser = {  
		      "_id":"56be5ae3f3289a31645ef276",
		      "name":"John Mon Calamari",
		      "type":"player",
		      "phoneNumber":"0729003605",
		      "hasPets":true,
		      "allergies":[  
		         "squids",
		         "octopus",
		         "oysters",
		         "calamares"
		      ],
		      "__v":0,
		      "awards":[  

		      ],
		      "challenges":{  
		         "published":[  

		         ],
		         "active":[  

		         ],
		         "completed":[  

		         ]
		      },
		      "location":{  
		         "address":"Valhallavägen 21",
		         "geojson":{  
		            "type":"Point",
		            "coordinates":[  
		               -105.01621,
		               39.57422
		            ]
		         }
		      }
			}



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
.controller('mainController', function($scope) {
	});