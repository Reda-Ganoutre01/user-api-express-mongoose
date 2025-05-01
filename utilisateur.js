const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true }, // Added required field for better validation
    description: { type: String, required: true },
    prix: { type: Number, required: true }, // Assuming prix is a number
}, { timestamps: true });

module.exports= Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);


// module.exports = Utilisateur= mongoose.model('utilisateur', utilisateurSchema);