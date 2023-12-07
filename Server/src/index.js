const http = require('http');
const PORT = 3001;
const characters = require("./utils/data");
const { write } = require('fs');
const getCharById = require('./controllers/getCharById');

http
    .createServer((req, res)=>{
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes("/rickandmorty/character")){
        const id = url.split("/").pop();
        getCharById(res, id);
    } else{
        return res
        .writeHead(404, { "Content-Type": "application/json" })
        .end(JSON.stringify({ message: "Wrong url" }))
    }
})
    .listen(PORT, "127.0.0.1",
        () => (console.log(`Server Listening on port ${PORT}`))
    );






//200: OK
//400: ERROR CLIENTE
//500: ERROR SERVIDOR