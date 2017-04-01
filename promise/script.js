document.getElementById("search").addEventListener("keyup", function(event) {
  var query = event.target.value;
  axios
    .all([
      axios.get("http://localhost:3334/movies/" + query),
      axios.get("http://localhost:3334/tv/" + query)
    ])
    .then(function(data) {
      var movies = data[0].data;
      var tv = data[1].data;

      var items = movies.concat(tv);
      renderResults(items);
    });
});

function renderResults(results) {
  var searchResultsElement = document.getElementById("searchResults");
  searchResultsElement.innerHTML = "";

  for (var i = 0; i < results.length; i++) {
    var el = document.createElement("li");
    el.innerHTML = results[i];
    searchResultsElement.appendChild(el);
  }
}
