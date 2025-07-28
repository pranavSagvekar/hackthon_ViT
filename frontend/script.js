function fetchData() {
  fetch('/')
    .then(res => res.text())
    .then(data => {
      document.getElementById('result').innerText = data;
    })
    .catch(err => {
      document.getElementById('result').innerText = 'Error: ' + err;
    });
}
