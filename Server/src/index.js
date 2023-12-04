const http = require('http');

http.createServer((req, res)=>{
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');


    switch(url) { 
        case "/":
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hola");
   
 

}

  
}).listen(3001,"localhost");





//200: OK
//400: ERROR CLIENTE
//500: ERROR SERVIDOR