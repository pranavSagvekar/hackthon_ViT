import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/submit", (req, res) => {
  const { date, city, type, commodity } = req.body;
  console.log("Received Data:", req.body);
  res.json({ message: "Data received successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});