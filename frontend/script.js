function sendData() {
  const commodity = document.getElementById('commodity').value.trim();

  if (!commodity) {
    document.getElementById('response').innerText = 'Please enter a commodity.';
    return;
  }

  fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ commodity })
  })
    .then(res => {
      if (!res.ok) throw new Error('Server error');
      return res.json();
    })
    .then(data => {
      document.getElementById('response').innerText = data.message;
    })
    .catch(err => {
      console.error('Error:', err);
      document.getElementById('response').innerText = 'Failed to send data.';
    });
}
