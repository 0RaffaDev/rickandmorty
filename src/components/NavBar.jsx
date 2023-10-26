import SearchBar from './SearchBar'
import style from '../styles/NavBar.module.css'


import { NavLink } from 'react-router-dom'
const NavBar = ({onSearch})=>{
    return(
    <div className={style.conteiner}>
       <NavLink to='/'> <button>HOME</button></NavLink>
       <NavLink to='/About'><button>ABOUT</button></NavLink>

        <SearchBar onSearch={onSearch} />
        
    </div>
    )
}

export default NavBar