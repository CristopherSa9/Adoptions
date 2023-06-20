const express = require("express"); 
const router = express.Router(); 
const perritosgatoscontroller= require('../controllers/perritosgatoscontrollers'); 
router.get('/perritosgatos', perritosgatoscontroller.getperritosgatos); 
router.put('/perritosgatos', perritosgatoscontroller.putperritosgatos);
router.post('/perritosgatos', perritosgatoscontroller.postperritosgatos);
router.delete('/perritosgatos', perritosgatoscontroller.deleteperritosgatos);

module.exports= router;