import { Link } from 'react-router-dom'



const Error = ()=>{

    return(
        <div>
            <center>
            <h1>ERROR 404</h1>
            <h2>URL NO ENCONTRADA</h2>
            <p>La direccion a la que esta intentando ingresar no es valida. Por favor ingrese una URL valida.</p>
            <p>Puedes probar en ir a nuestra pagina principal con el boton de aqui abajo!</p>
            <Link to='/home'><button>HOME</button></Link> 
            </center>
        </div>
    )

}
export default Error;