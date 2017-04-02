document.getElementById("search").addEventListener("keyup", function(event) {
  var query = event.target.value;
  Promise.all([
    $.get("http://localhost:3334/movies/" + query),
    $.get("http://localhost:3334/tv/" + query)
  ]).then(function(data) {
    var movies = data[0];
    var tv = data[1];

    var items = movies.concat(tv);
    renderResults(items);
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
