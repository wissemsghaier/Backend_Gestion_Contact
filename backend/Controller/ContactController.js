const contactModel = require('../Models/contact')

// fonction ajouter contact 
exports.ajouterContact = async(req, res) => {
    try {
      const contactObjet = {
        nom: req.body.nom,
        numero: req.body.numero
      };
      const contact = new contactModel(contactObjet);
      await contact.save();
      res.json({ message: "Contact ajouté avec succès" });
    } catch (error) {
      console.error('Error while adding contact:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // tache modifier contact 
  exports.modifierContact = async (req, res) => {
    try{
      const param = req.params.id
      const modidiedObj = {
        nom: req.body.nom,
        numero: req.body.numero
      }
      const contactUpdate = await contactModel.findByIdAndUpdate(param, modidiedObj).exec();
      res.status(200).json({" message" : "conract modifier "})
    }catch(error){
      console.error('Error while delete contacts:', error);
      res.status(400).json(error);
    }
    
  
  
    //res.send('Modifier contact');
  }

  // tache supprimer contact 
  exports.suprimerContact = async (req, res) => {
    try{
      const param = req.params.id
  
      const contactDelete = await contactModel.findByIdAndDelete(param).exec();
      res.status(200).json({message : "conract supprimer "})
    } catch (error) {
      console.error('Error while delete contacts:', error);
      res.status(400).json(error);
    }
    
    //console.log(param);
    //res.send('Supprimer contact');
  }

  // tache lister  contact 
  exports.listerContact = async (req, res) => {
    try {
      const contactListe = await contactModel.find({}).exec(); // Use await with exec()
      res.status(200).json({ contactListe });
    } catch (error) {
      console.error('Error while listing contacts:', error);
      res.status(400).json(error);
    }
  }
