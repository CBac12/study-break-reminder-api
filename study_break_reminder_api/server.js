// server.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'reminders.json');

// Helper: read data (creates file if missing)
async function readData() {
  try {
    const text = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(text || '[]');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, '[]', 'utf8');
      return [];
    }
    throw err;
  }
}

async function writeData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Routes

app.get('/', (req, res) => {
  res.send('Study Break Reminders API is running');
});

// GET all reminders
app.get('/reminders', async (req, res) => {
  try {
    const reminders = await readData();
    res.json(reminders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET one reminder
app.get('/reminders/:id', async (req, res) => {
  try {
    const reminders = await readData();
    const r = reminders.find(x => x.id === req.params.id);
    if (!r) return res.status(404).json({ error: 'Reminder not found' });
    res.json(r);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Study Break Reminders API listening on http://localhost:${PORT}`));

