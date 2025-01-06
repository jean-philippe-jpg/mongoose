const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({

    name: String,
    nbVue: Number
    
});

const model= mongoose.model("vueanimals", animalSchema);

 module.exports = model;

 