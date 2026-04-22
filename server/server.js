const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;
const FILE_PATH = './data.json';

app.use(cors());
app.use(express.json());

// GET-запит
app.get('/api/tech', (req, res) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Помилка читання файлу' });
    res.json(JSON.parse(data));
  });
});

// POST-запит
app.post('/api/tech', (req, res) => {
  const newData = req.body;
  fs.writeFile(FILE_PATH, JSON.stringify(newData, null, 2), (err) => {
    if (err) return res.status(500).json({ message: 'Помилка запису файлу' });
    res.json({ message: 'Дані успішно збережено!' });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер успішно запущено на http://localhost:${PORT}`);
});