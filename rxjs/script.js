Rx.Observable
  .fromEvent(document.getElementById("search"), "keyup")
  .switchMap(event => {
    return Rx.Observable.fromPromise(
      axios.get("http://localhost:3334/movies/" + event.target.value)
    );
  })
  .subscribe(results => {
    renderResults(results.data);
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
