
const axios = require('axios');


const getCharById = (res, id) => {
    axios
        .get(`https://rym2.up.railway.app/api/character/${id}?key=pi-0raffadev`)
        .then(response => response.data)
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location
            };
        return res
            .writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(character));
        })
        .catch(error => 
        res 
            .writeHead(500, {"Content-Type": "application/json"})
            .end(JSON.stringify({message:  error.message}))
)
}  


module.exports = getCharById;
