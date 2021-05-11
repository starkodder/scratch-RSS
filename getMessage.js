var url = window.location.pathname.split("/");
var id = url[url.length-2];
window.fetch('https://api.scratch.mit.edu/projects/' + id)
  .then(data => data.json())
  .then(data => alert(data.history.modified));
