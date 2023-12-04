import './App.css'


import {Routes, Route, useLocation} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Detail from './components/Detail';
import Error from './pages/Error';
import Form from './components/Form';
import NavBar from './components/NavBar';

const App = () => {
  
 const location = useLocation();
 

  return (

   <div>
     {location.pathname !== '/home' && location.pathname !== '/' ? <NavBar/> : null}

      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
  )
}

export default App;
  