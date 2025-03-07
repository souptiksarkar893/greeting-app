const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/api/greet', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.json({ error: 'Name is required.' });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
