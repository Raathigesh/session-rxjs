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
  const searchResultsElement = document.getElementById("searchResults");
  searchResultsElement.innerHTML = "";

  for (let item of results) {
    const el = document.createElement("li");
    el.innerHTML = item;
    searchResultsElement.appendChild(el);
  }
}
