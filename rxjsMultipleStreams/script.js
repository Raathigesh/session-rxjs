Rx.Observable
  .fromEvent(document.getElementById("search"), "keyup")
  .switchMap(event => {
    return Rx.Observable.fromPromise(
      $.get("http://localhost:3334/movies/" + event.target.value)
    );
  })
  .subscribe(results => {
    renderResults(results.data);
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
