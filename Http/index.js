const http = require('http')

/*
*
* Crear servidores
* listen(): Le decimos en que puerto va escuchar el servidor
*
*/

/* Forma 1 */
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'}) //El tipo de respuesta que estamos dando es un 200
    res.write('<h1>Hola mundo con NodeJS</h1>'); 
    res.end();
}).listen(3000);

/* Forma 2 */
const handleServer = function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'}) //El tipo de respuesta que estamos dando es un 200
    res.write('<h1>Hola mundo con NodeJS</h1>'); 
    res.end();
}

const server = http.createServer(handleServer)

server.listen(3000, function(){
    console.log("Server on port 3000")
})
