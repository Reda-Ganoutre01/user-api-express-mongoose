const express = require('express');
const mongoose = require('mongoose');
const utilisateur = require('./utilisateur'); // Ensure the path is correct
const app = express();
const port = 4000;

mongoose.connect('mongodb://127.0.0.1:27017/UtilisateurDB')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Connection error', error));

app.use(express.json());

app.post('/c', async (req, res) => {
    try {
        const { nom, description, prix } = req.body; // Destructure req.body

        const newUtilisateur = new utilisateur({
            nom: nom, // Assign values correctly
            description: description,
            prix: prix,
        });

        const result = await newUtilisateur.save();
        res.json({ message: 'Enregistré dans la base de données', result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
