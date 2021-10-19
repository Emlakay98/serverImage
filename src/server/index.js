//Requiriendo las librerias
const express = require ("express");
const morgan = require ("morgan");
const fs = require('fs')
const http = require ("http");

const app = express ();

/* const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../DocumentApis/swagger.json')
app.use('/54264257fm@98',swaggerUi.serve, swaggerUi.setup(swaggerDoc)) */

const cabeceras = require('../services/utils/middleware/verbosHttp')
app.use(cabeceras)

app.use(morgan("dev"));
app.use(express.json({limit:"2mb", extended:true}));
app.use(express.urlencoded({limit:"2mb", extended:true}));
require("../services/router")(app);
require("../services/default")(app);

//servidor

http.createServer(/* OPTION_SERVER, */ app).listen(18001,()=>{
    console.log("Ejecutando servidor http: 18001")
    console.log('\n')
})