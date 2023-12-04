
import {Link } from 'react-router-dom';


const Form = ()=>{
  
    
    return(


        <div>
            <center>
            <form >
                <h1>LOGIN</h1>
                <label htmlFor=""> Email: </label>
                <input type="text"></input>
                <label htmlFor=""> Contraseña: </label>
                <input type="text"></input>
                <br />
                <br />
                    <Link to='/home'> <button>SUBMIT</button></Link>

             
                

                
            </form>
            </center>


        </div>
    )
}

export default Form;