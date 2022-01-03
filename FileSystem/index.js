const fs = require('fs')

/*
*
* Crear y leer archivos con NodeJS
* Callback: funcion que se ejecuta cuando a terminado el proceso anterior
*
*/
 
/*Creamos archivo*/ 
fs.writeFile('./texto.txt', 'Probando modulo FileSystem (lectura y escritura)', function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Archivo creado correctamente!!!")
    }
})  

/* Leemos archivo */
fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})