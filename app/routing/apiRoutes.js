// Load friendsArray
var friendsArray = require("../data/friends.js");

// Routing
module.exports = function(app) {

  // API get request
  app.get("/api/friends.js", function(req, res) {
    res.json(friendsArray);
  });

  // API post requests
  app.post("/api/friends.js", function(req, res) {
    
    // Create a bestMatch variable to store username, photo and pointDifference of the best match
    var bestMatch = {
      userName: "",
      photo: "",
      pointDifference: 10000
    };

    console.log(req.body);

    var uData = req.body;
    var uScores = uData.scores;

    console.log(uScores);

    var totalDifference = 0;

    // nested for loop to compare uData to other uData (nested objects) within friendsArray
    for (var i=0; i < friendsArray.length; i++) {
      console.log(friendsArray[i]);
      totalDifference = 0;

      for (var j=0; j < friendsArray[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(uScores[j]) - parseInt(friendsArray[i].scores[j]));

        if (totalDifference <= bestMatch.pointDifference) {
          bestMatch.name = friendsArray[i].name;
          bestMatch.photo = friendsArray[i].photo;
          bestMatch.pointDifference = totalDifference;
        }
      }
    }
    // push user to friendsArray
    friendsArray.push(uData);

    // Return json with the user's bestMatch
    res.json(bestMatch);
  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
};
