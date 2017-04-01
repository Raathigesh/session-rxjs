document.getElementById("search").addEventListener("keyup", function(event) {
  var query = event.target.value;
  $.get("http://localhost:3334/movies/" + query, function(movies) {
    $.get("http://localhost:3334/tv/" + query, function(series) {
      var results = movies.concat(series);
      renderResults(results);
    });
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
