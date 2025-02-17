import express from 'express'; 

const app=express(); 
const puerto=3000; 


//ruta GET con parámetros de consulta
//solicitud: http://localhost:3000/profile?edad=30
app.get ('/profile', (req, res)=>{
    const query=req.query.edad; 
    console.log(`Edad recibida: ${edad}`);
    res.send (`Edad del perfil: ${edad}`);
})

app.listen(puerto, ()=>{console.log (`Servidor corriendo en http:/localhost: ${puerto}`)});