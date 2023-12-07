import NavBar from "../components/NavBar"
import Cards from "../components/Cards"
import {useState} from 'react';
import axios from 'axios' 


const Home = (props)=>{
 
    
 const [characters, setCharacters] = useState([]);
 

 const onSearch = (id) => {
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({ data }) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     }
  })
  .catch(() => {
     alert('¡No hay personajes con este ID!')
  })
};

const onClose = (id) =>{
  setCharacters(
    characters.filter((char) => {return char.id !== Number(id)})
  )
}
    return(
        
        <div >
            <NavBar onSearch={onSearch} logout={props.logout}/> 
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}
export default Home