//modul mongoose
/*const mongoose = require('mongoose');
const vehicules = require('./vehicule');
//mongodb://localhost:27017/jp_mongoose

(async () => {
   

    try {
       
        await mongoose.connect('mongodb+srv://jean-phi:%J25061984c%@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority', {

            useNewUrlParser: true,
            useUnifiedTopology: true,
        }), 
    
        console.log('connection réussie');

        const animals = new vehicules({

            name: "ludo",
            nbVue:2
            
           
        });

       const result =  await animals.save();
        
        //const result = await vehicules.find();
       
         console.log(result);
      

    } catch (error) {
        console.error(error);
    }

    
  })();*/
  const express = require("express");
  const mongoose = require("mongoose");
  const cors = require("cors");
  
  const app = express();
  const PORT = 3000;
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  
  // Connexion à MongoDB
  const uri = "mongodb+srv://jean-phi:%J25061984c%@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority";
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
  
  // Définir un modèle Mongoose
  const ItemSchema = new mongoose.Schema({
    name: String,
    vue: Number,
  });
  
  const Item = mongoose.model("Item", ItemSchema);
  
  // Endpoint pour obtenir tous les documents
  app.get("/api/items", async (req, res) => {
    try {
      const items = await vehicules.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Démarrer le serveur
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
  
  
  