import SearchBar from './SearchBar'
const Nav = ({onSearch})=>{
    return(
    <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    )
}

export default Nav