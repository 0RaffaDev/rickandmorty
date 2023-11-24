import {useState} from 'react'
import style from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) =>{setId(event.target.value)}


   return (
      <div className={style.conteiner}>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
