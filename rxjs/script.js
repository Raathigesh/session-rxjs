Rx.Observable
  .fromEvent(document.getElementById("search"), "keyup")
  .map(event => {
    return event.target.value;
  })
  .switchMap(searchQuery => {
    return Rx.Observable.fromPromise(
      axios.get("http://localhost:3334/movies/" + searchQuery)
    );
  })
  .map(results => {
    /*var movies = results[0].data;
    var tv = results[1].data;
    return movies.concat(tv);*/
    return results.data;
  })
  .subscribe(results => {
    renderResults(results);
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
