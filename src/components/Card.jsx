import style from '../styles/Card.module.css'



export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.conteiner}> 
         <button onClick={() => onClose(id)}>X</button>
         <h2>Nombre: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Especie: {species}</h2>
         <h2>Genero: {gender}</h2>
         <h2>Origen: {origin}</h2>
         <img src={image} alt='nombre'/> 
      </div>
   );
}
