import './App.css'


import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Detail from './components/Detail';
import Error from './pages/Error';
import Form from './components/Form';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

const App = () => {
  const navigate = useNavigate();
 const location = useLocation();
 const[access, setAccess] = useState(false);
 const EMAIL = 'ejemplo@gmail.com';
 const PASSWORD = 'canito2104';


 function login (userData) {
  if(userData.password === PASSWORD && userData.email === EMAIL){
    setAccess(true);
    navigate('/home');
      


 }
  }
  useEffect(()=>{
    !access && navigate('/');
  },[access]);


  return (

   <div>
     {location.pathname !== '/home' && location.pathname !== '/' ? <NavBar/> : null}

      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
  )
}

export default App;
  