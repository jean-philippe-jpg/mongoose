

const mongoose = require('mongoose');
const vehicules = require('./vehicule');


async function mongotest() {
    

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
        
    
        const result = await vehicules.find({marque: "Renault"});
       
        console.log(result);
    

    } catch (error) {
        console.error(error);
    }
};
  
mongotest()
    
