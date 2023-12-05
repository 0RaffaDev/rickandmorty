
import {Link } from 'react-router-dom';
import login from '../img/7dxS.gif';
import { useState } from 'react';
import perfil from '../img/kisspng-rick-sanchez-youtube-meeseeks-and-destroy-pickle-r-rick-and-morty-5ac21f3eb26695.6388095615226714227307.png'
import validation from '../utils/validation'
const Form = (props)=>{

    const [userData, setUserData] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({email: "Ingrese su email", password: "Ingrese su contraseña"})

    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value,
        })
        setErrors(validation({...userData, [name]: value}))
} 

    
    return(


        <div>
            <center>
            <form style={{
      height  : '700px'
    , width: '300px'
    , backgroundColor: 'rgba(0,0,0,0.7)'
    , boxShadow: '100px'
    , opacity : '10px'
    , flexDirection  : 'column'
    , justifyContent : 'center'
    , alignItems     : 'center'
    , margin: '10px 10px   30px  '
    , padding: '1px'
    , position: 'flex'
   
   


   }} >

                <h1>LOGIN</h1>
                <img src={perfil} style={{width: '120px',height: '120px', borderRadius: '50%', borderColor:'red'}}  />
                <br />
                <br />
                <label htmlFor=""> Email:</label>
                <br />
                <input 
                type="text"
                name='email'
                key='email'
                value={userData.email}
                placeholder='Ingresar email...'
                onChange={handleChange}
                ></input>
                <p style={{color: 'coral', height: '10px' }}>{errors.email ? errors.email : null}</p>


               
                <label htmlFor="">  Password: </label>
                <br />
                <input
                key='password'
                type="password"
                name='password'
                value={userData.password}
                placeholder='Ingrese contraseña...'
                onChange={handleChange}

                ></input>
                <p style={{color: 'coral',  }}>{errors.password ? errors.password : null}</p>



                    <Link to='/home'> 
                        <button type='submit' disabled={errors.email || errors.password}> 
                            <img
                            src={login}  style={{width:'120px', height: '120px', } }
                            ></img>
                  <br />
                  SUBMIT</button></Link>
                
                 

             
                

                
            </form>
            </center>


        </div>
    )
}

export default Form;