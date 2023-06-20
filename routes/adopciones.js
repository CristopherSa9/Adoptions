const express = require("express"); 
const router = express.Router(); 
const adopcionescontroller= require('../controllers/adopcionescontrollers'); 
router.get('/adopciones', adopcionescontroller.getadopciones); 
router.put('/adopciones', adopcionescontroller.putadopciones);
router.post('/adopciones', adopcionescontroller.postadopciones);
router.delete('/adopciones', adopcionescontroller.deleteadopciones);

module.exports= router;