// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsList
// ===============================================================================

var friendsArray = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
      username: "",
      photo: "",
      pointDifference: 10000
    };

    console.log(req.body);

    var uData = req.body;
    var uScores = uData.scores;

    console.log(uScores);

    var totalDifference = 0;

    // nested for loop to compare uData to other uData (nested objects) within friendsArray
    for (var i=0; i < friendsArray.length; i++){
      console.log(friends[i]);
      totalDifference = 0;

      for (var j=0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

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
