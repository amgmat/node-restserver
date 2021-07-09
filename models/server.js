const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

    // Middlewares
        this.middlewares();

    // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        // cors
        this.app.use(cors());

        // Lectura y parse del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        // this.app.get('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.json({
        //         // ok:true,
        //         msg: 'get API'
        //     });
        // });
        // this.app.put('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.status(400).json({
        //         // ok:true,
        //         msg: 'put API'
        //     });
        // });
        // this.app.post('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.status(201).json({
        //         // ok:true,
        //         msg: 'post API'
        //     });
        // });
        // this.app.put('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.status(201).json({
        //         // ok:true,
        //         msg: 'put API'
        //     });
        // });
        // this.app.delete('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.json({
        //         // ok:true,
        //         msg: 'delete API'
        //     });
        // });
        // this.app.patch('/api', (req,res)=>{
        //     // res.send('Hello world');
        //     res.json({
        //         // ok:true,
        //         msg: 'patch API'
        //     });
        // });
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }

}

module.exports= Server;