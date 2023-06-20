let controller = {}; 
let format={
    "success": null, 
        "code": null, 
        "message": null, 
        "data": []
}; 


controller.getpropietarios=(req,res)=>{
    const sql = "SELECT * FROM propietarios WHERE id = ?"; 
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
                    format.message=err; 
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="Estos son los datos del propietario"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
}


//metodo para agregar
controller.postpropietarios= (req,res)=>{
    const sql = "INSERT INTO propietarios (nombre, edad, telefono, direccion, numero_casa, ingresos ) values(?,?,?,?,?,?) "; 
    req.getConnection((error, conexion)=>{
        if(error){
                format.success=false; 
                format.code=500; 
                format.message=error; 
                res.status(500); 
                res.json(format);  
        }
        else{
            conexion.query(sql, [req.body.nombre, req.body.edad, req.body.telefono, req.body.direccion, req.body.numero_casa, req.body.ingresos], (err, results)=>{
                if(err){
                    format.success=false; 
                    format.code=400; 
                    format.message=err;
                    res.status(400); 
                    res.json(format); 
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="propietario ingresado correctamente"; 
                    format.data= results; 
                    res.status(200); 
                    res.json(format);
                }
            })
        }
    })
};

//Metodo para borrar
controller.deletepropietarios= (req,res)=>{
    const sql = "DELETE FROM propietarios WHERE id= ?"; 
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
                    format.success=false; 
                    format.code=400; 
                    format.message=err; 
                    res.status(400); 
                    res.json(format);
                }
                else{
                    format.success=true; 
                    format.code=200; 
                    format.message="Propietario elimiado correctamente"; 
                    res.status(200); 
                    res.json(format); 
                }
            })
        }
    })
}; 
//metodo para actualizar
controller.putpropietarios= (req, res)=>{ 
   const sql = "UPDATE propietarios SET ? WHERE id=?"; 
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
                   res.status(400); 
                   res.json(format); 
               }
               else{
                   format.success=true; 
                   format.code=200; 
                   format.message="Propietario actualizado correctamente"; 
                   format.data= results; 
                   res.status(200); 
                   res.json(format); 
               }
           })
       }
   })
}; 



module.exports=controller;