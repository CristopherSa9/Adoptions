let controller = {}; 
let format={
    "success": null, 
        "code": null, 
        "message": null, 
        "data": []
}; 


controller.getperritosgatos=(req,res)=>{
    const sql = "SELECT * FROM perritosgatos WHERE id = ?"; 
    req.getConnection((error, conexion)=>{
        if(error){
                format.success=false; 
                format.code=500; 
                format.message=error; 
                res.status(500); 
                res.json(format);  
        }
        else{
            conexion.query(sql, [req.query.id], (err, results)=>{
                if(err){
                    format.success=false; 
                    format.code=400; 
                    format.message= err; 
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="Estos son los datos de los perritos y gatitos"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
}


//metodo para agregar
controller.postperritosgatos= (req,res)=>{
    const sql = "INSERT INTO perritosgatos (animal, raza, edad_animal, nombre_animal, color, datos_salud, genero) values(?,?,?,?,?,?,?) "; 
    req.getConnection((error, conexion)=>{
        if(error){
                format.success=false; 
                format.code=500; 
                format.message=error; 
                res.status(500); 
                res.json(format);  
        }
        else{
            conexion.query(sql, [req.body.animal, req.body.raza, req.body.edad_animal, req.body.nombre_animal, req.body.color, req.body.datos_salud, req.body.genero], (err, results)=>{
                if(err){
                    format.success=false; 
                    format.code=400; 
                    format.message= err; 
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="Dato de la mascota ingresado correctamente"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
};

//Metodo para borrar
controller.deleteperritosgatos= (req,res)=>{
    const sql = "DELETE FROM perritosgatos WHERE id= ?"; 
     req.getConnection((error, conexion)=>{ 
         if (error){
            format.success=false; 
            format.code=500; 
            format.message=error;
            res.status(500); 
            res.json(format); 
         }
         else{
             conexion.query(sql,[req.body.id], (err, results)=>{
                 if(err){
                    format.success=true; 
                    format.code=400; 
                    format.message=err; 
                    format.data= results; 
                    res.status(400); 
                    res.json(format);
                }
            })
        }
    })
}; 
//metodo para actualizar
controller.putperritosgatos= (req, res)=>{ 
   const sql = "UPDATE perritosgatos SET ? WHERE ID=?"; 
   req.getConnection((error, conexion)=>{ 
       if (error){
               format.success=false; 
               format.code=500; 
               format.message=error;
               res.status(500); 
               res.json(format); 
       }
       else{
           conexion.query(sql,[req.body, req.body.id], (err, results)=>{
               if(err){
                   format.success=true; 
                   format.code=400; 
                   format.message=err;  
                   format.data= results; 
                   res.status(400); 
                   res.json(format); 
               }
               else{
                   format.success=true; 
                   format.code=200; 
                   format.message="Dato de la mascotilla actualizado correctamente"; 
                   format.data= results; 
                   res.status(200); 
                   res.json(format); 
               }
           })
       }
   })
}; 



module.exports=controller;