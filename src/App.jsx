import './App.css'

import {useState} from 'react';
import axios from 'axios' 
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';

const App = () => {
  
 const [characters, setCharacters] = useState([]);
 

 const onSearch = (id) => {
  axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-0raffadev`)
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

  return (
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
  )
}

export default App;
