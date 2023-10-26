import './App.css'


import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Detail from './components/Detail';
import Error from './pages/Error';

const App = () => {
  
 

  return (

   <div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </div>
  )
}

export default App;
  