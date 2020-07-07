var moviesArray = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    rating: 7.6,
    hasWatched: true
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8.8,
    hasWatched: true
  },
  {
    title: "The Platform",
    rating: 7.0,
    hasWatched: false
  },
  {
    title: "Bad Boys for Life",
    rating: 6.9,
    hasWatched: false
  }
]

// iterate through array and print info on objects
moviesArray.forEach(element => {
  var constructedResponse = "You have ";
  // check if the movie has been seen or not and add to string response
  if (element.hasWatched) {
    constructedResponse += "seen ";
  } else {
    constructedResponse += "not seen ";
  }
  // construct rest of response
  constructedResponse += "\"" + element.title + "\"" + " - " + element.rating + " stars";
  console.log(constructedResponse);
});