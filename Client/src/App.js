import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blog from './pages/Blog';
import './styles/general.css'

function App() {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/blog/:id' element={<Blog />}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
