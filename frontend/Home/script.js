function updateCommodityOptions() {
  const type = document.getElementById("type").value;
  const commoditySelect = document.getElementById("commodity");
  let options = [];

  if (type === "Vegetable") {
    options = ["Tomato", "Potato", "Onion", "Cabbage", "Brinjal"];
  } else if (type === "Fruit") {
    options = ["Apple", "Banana", "Guava", "Papaya", "Grapes"];
  }

  commoditySelect.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join("");
}

document.getElementById("dataForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    date: document.getElementById("date").value,
    city: document.getElementById("city").value,
    type: document.getElementById("type").value,
    commodity: document.getElementById("commodity").value
  };

  fetch("http://localhost:3000/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      document.getElementById("response").innerText = result.message;
    })
    .catch(err => {
      document.getElementById("response").innerText = "Error sending data";
    });
});