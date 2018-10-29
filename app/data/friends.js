var friendsArray = [
    {
      userName: "SpongeBob",
      photoLink: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/330px-Spongebob-squarepants.svg.png",
      scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
          ]
      },
      {
        userName: "Ross Geller",
        photoLink: "http://trackingboard1.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/ross-geller.jpg",
        scores: [
              "3",
              "1",
              "2",
              "3",
              "5",
              "4",
              "3",
              "5",
              "2",
              "2"
            ]
        },
        {
            userName: "Rachel Green",
            photoLink: "https://pixel.nymag.com/imgs/daily/vulture/2014/12/17/17-rachel-green-jewish.w700.h467.jpg",
            scores: [
                  "3",
                  "3",
                  "4",
                  "5",
                  "2",
                  "4",
                  "2",
                  "3",
                  "4",
                  "1"
                ]
        }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;