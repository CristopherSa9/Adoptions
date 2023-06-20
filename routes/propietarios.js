const express = require("express"); 
const router = express.Router(); 
const propietarioscontroller= require('../controllers/propietarioscontrollers'); 
router.get('/propietarios', propietarioscontroller.getpropietarios); 
router.put('/propietarios', propietarioscontroller.putpropietarios);
router.post('/propietarios', propietarioscontroller.postpropietarios);
router.delete('/propietarios', propietarioscontroller.deletepropietarios);

module.exports= router;