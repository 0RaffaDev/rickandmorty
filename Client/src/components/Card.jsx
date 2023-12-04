import style from '../styles/Card.module.css'
import {Link} from 'react-router-dom'


export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.conteiner}> 
         <button onClick={() => onClose(id)}>X</button>
     <Link to={`/detail/${id}`}>

      <button>
      <img src={image} alt='nombre'/> 
      
         <h2>Nombre: {name}</h2>
         <h2>Especie: {species}</h2>
         </button>
      </Link>

      </div>
      
   );
}
