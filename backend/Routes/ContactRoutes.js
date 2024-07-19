const express = require ('express')

const router = express.Router();

const ContactController = require ("../Controller/ContactController")

router.post('/ajouter', ContactController.ajouterContact)
router.post('/:id/modifier' , ContactController.modifierContact)
router.get('/:id/supprimer' , ContactController.suprimerContact)
router.get('/lister', ContactController.listerContact)


module.exports = router