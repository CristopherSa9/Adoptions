let controller = {}; 
let format={
    "success": null, 
        "code": null, 
        "message": null, 
        "data": []
}; 


controller.getadopciones=(req,res)=>{
    const sql = "SELECT * FROM adopciones"; 
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
                    format.data= results; 
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="Estos son los datos de la adopcion"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
}


//metodo para agregar
controller.postadopciones= (req,res)=>{
    const sql = "INSERT INTO adopciones(id_propietario, id_mascota, dia_adopcion) values(?,?,?) "; 
    req.getConnection((error, conexion)=>{
        if(error){
                format.success=false; 
                format.code=500; 
                format.message=error;  
                res.status(500); 
                res.json(format);  
        }
        else{
            conexion.query(sql, [req.body.id_propietario, req.body.id_mascota, req.body.dia_adopcion], (err, results)=>{
                if(err){
                    format.success=false; 
                    format.code=400; 
                    format.message= err; 
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=201; 
                    format.message="Adopcion ingresada correctamente"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
};

//Metodo para borrar
controller.deleteadopciones= (req,res)=>{
    const sql = "DELETE FROM adopciones WHERE id= ?"; 
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
controller.putadopciones= (req, res)=>{ 
   const sql = "UPDATE adopcion SET ? WHERE ID=?"; 
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
                   format.message="Adopcion actualizada correctamente"; 
                   format.data= results; 
                   res.status(200); 
                   res.json(format); 
               }
           })
       }
   })
}; 



module.exports=controller;