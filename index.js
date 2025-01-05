

const mongoose = require('mongoose');
const vehicules = require('./vehicule');
    
(async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jp_mongoose', {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        }), 
        console.log('connection réussie');

        /*const vehicule = new vehicules({

            marque: "Renault",
            modele: "R5 TURBO2",
            annee: 1989,
            couleur: "noir",
            prix: 100000

        });*/

        const result = await vehicules.find();

        //const result = await vehicule.save()
        console.log( result);

    } catch (error) {
        console.error(error);
    }
    })();

    const apiKey = 'd408b2585e4efe44f7725a1691a98ff2';

function recupDonees(city, callback) {
    try {
        const response =  fetch(`mongodb://localhost:27017/jp_mongoose`);
        const data = response.json();
    } catch {
        console.log("error");
    }
}