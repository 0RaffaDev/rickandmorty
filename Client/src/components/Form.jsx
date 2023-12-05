
import {Link } from 'react-router-dom';
import login from '../img/7dxS.gif';

const Form = ()=>{
  
    
    return(


        <div>
            <center>
            <form style={{
    

      height  : '500px'
    , width: '300px'

    , backgroundColor: 'rgba(0,0,0,0.5)'
    , boxShadow: '100px'
    , opacity : '10px'
    , flexDirection  : 'column'
    , justifyContent : 'center'
    , alignItems     : 'center'
    , margin: '100px'
    , padding: '10px'


   }} >

                <h1 style={{}}>LOGIN</h1>
               
                <br />
                <br />
                <label htmlFor=""> Email:</label>
                <br />
                <input type="text"></input>
                <br />
               
                <label htmlFor=""> Password: </label>
                <br />
                <input type="password"></input>
                <br />
                <br />
                    <Link to='/home'> <button type='submit'> <img
                 src={login} style={{width:'150px', height: '150px',}}
                 ></img>
                  <br />
                  SUBMIT</button></Link>
                
                 

             
                

                
            </form>
            </center>


        </div>
    )
}

export default Form;