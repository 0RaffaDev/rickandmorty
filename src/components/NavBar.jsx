import SearchBar from './SearchBar'
import style from '../styles/NavBar.module.css'


import { NavLink } from 'react-router-dom'
const NavBar = ({onSearch})=>{
    return(
    <div className={style.conteiner}>
       <button><NavLink to='/home' style={({isActive}) => isActive ? {color: 'coral'} : {color: 'white'}}>HOME</NavLink></button>

       <button><NavLink to='/About' style={({isActive}) => isActive ? {color: 'coral'} : {color: 'white'}}>ABOUT</NavLink></button>
       <button><NavLink to='/' style={({isActive}) => isActive ? {color: 'coral'} : {color: 'white'}}>LOG OUT</NavLink></button>

     
        <SearchBar onSearch={onSearch} />
        
    </div>
    )
}

export default NavBar