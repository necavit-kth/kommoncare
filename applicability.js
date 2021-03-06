/*
 * Execute with: "$> node applicability.js" to see this code in action!
 */

var myFunction = "var count = 0; for (var i = 0; i < challenges.length; i++) {if (challenges[i].category.name === \"Shopping\") count++;} if (count >= 5) return true; return false;";

/* **** Original function code **** */
// function isApplicable(challenges) {
//   var count = 0;
//   for (var i = 0; i < challenges.length; i++) {
//     if (challenges[i].category.name === "Shopping") count++;
//   }
//   if (count >= 5) return true;
//   return false;
// }

var myChallenges = [
  {
    "category": {
      "name": "Shopping"
    }
  },
  {
    "category": {
      "name": "Shopping"
    }
  },
  {
    "category": {
      "name": "Shopping"
    }
  },
  {
    "category": {
      "name": "Shopping"
    }
  },
  {
    "category": {
      "name": "Shopping"
    }
  },
  {
    "category": {
      "name": "Shopping"
    }
  }
];

var isApplicable = new Function('challenges', myFunction);
console.log(isApplicable(myChallenges));
