const mongoose = require('mongoose')
// ContactSchema qui contient les chamgs  nom et numero qui se trouve dans la collection 
// id creer par defaut 
const ContactSchema = new mongoose.Schema({
    nom : {
        type: String,
        required: true,
    },
    numero : {
        type: String,
        required: true,
    },
}, { timestamps : true})
// contacts est le nom de collection dans mongoDB compass 
module.exports = mongoose.model("contacts", ContactSchema);