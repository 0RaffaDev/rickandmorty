
import style from '../styles/Card.module.css'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from './NavBar';



const Detail = ()=>{
   const {id} = useParams();
   const [character, setCharacter] = useState({})

   
    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-0raffadev`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);
    return(
      <div>

      <center>
        <div className={style.conteiner}>
         <img src={character.image && character.image} alt={character.image} />
         <h2>Nombre: "{character.name && character.name}"</h2>
         <h2>Status: {character.status && character.status}</h2>
         <h2>Especie: {character.species && character.species}</h2>
         <h2>Genero: {character.gender && character.gender}</h2>
         <h2>Origen: {character.origin?.name && character.origin?.name}</h2>
        </div>
        </center>
        </div>
    )
}

export default Detail;