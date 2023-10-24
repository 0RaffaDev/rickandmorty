import Card from './Card';
import style from '../styles/Cards.module.css'

export default function Cards({characters}) {
   return <div className={style.conteiner}>
      {
         characters.map((char)=>{
            return(<Card
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={char.onClose}
            />
            )
         })
      }
   </div>;
}
