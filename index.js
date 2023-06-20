const res = require("express/lib/response");
const { restart } = require("nodemon");

//Creacion de una constante ademas de requerir a la misma 
const express = require("express"),
app = express(), 
puerto = process.env.PORT || 3000, //puerto en el que se va a trabajar
bodyParser= require("body-Parser"), //dependensia
    mysql = require("mysql"),
    myConnection= require("express-myconnection"), 
    database = require("./database").config; 
    adopcionesroutes= require("./routes/adopciones"); 
    perritosgatosroutes= require("./routes/perritosgatos");
    propietariosroutes=require("./routes/propietarios"); 


    //formato para respuestas automaticas
    let format = {
        "success": null, 
        "code": null, 
        "message": null, 
        "data": []
    }; 
app.use(bodyParser.urlencoded({extended:true}));
app.use(myConnection(mysql, database)); 
app.use("/adopciones", adopcionesroutes);
app.use("/perritosgatos", perritosgatosroutes);
app.use("/propietarios", propietariosroutes);

app.listen(puerto, err =>{
    if(err){
        console.log(`Error en el puerto ${puerto}`);
    }
    else{
        console.log(`Todo bien en el puerto ${puerto}`); 
    }
})