import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// For ES Modules path support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON
app.use(express.json());

// ✅ Serve frontend folder statically
app.use(express.static(path.join(__dirname, '../frontend')));

// ✅ POST API route
app.post('/api/submit', (req, res) => {
  const { commodity } = req.body;
  console.log('Received commodity:', commodity);
  res.json({ message: `Received ${commodity}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
