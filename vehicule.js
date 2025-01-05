const mongoose = require('mongoose');

const vehiculesSchema = mongoose.Schema({

    marque: String,
    modele: String,
    annee: Number,
    couleur: String,
    prix: Number

});

const model= mongoose.model("jp_mongoose", vehiculesSchema);

 module.exports = model;