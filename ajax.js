
//const mongoose = require ('mongoose');
//const index = require ('./index.');

var req = new XMLHttpRequest();

// Grâce à la méthode open on peut indiquer la méthode de requête GET
// Cette méthode de requête permet de recevoir des données d’un serveur
// Nous indiquons également l’URL à utiliser
req.open('GET', 'mongodb+srv://monsieur_mongo:Mongoosepass@cluster0.fgnbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Cette évènement est déclenché lorsque la requête se termine correctement
req.addEventListener('load', function () {

});

// Méthode obligatoire qui envoie la requête
req.send();