import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Blog from './pages/Blog';
import CreateNew from './pages/CreateNew';
import UserProfile from './pages/UserProfile';
import EditBlog from './pages/EditBlog';
import './styles/general.css'

function App() {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/createNew' element={<CreateNew mode={true}/>}  />
          <Route path='/blog/:id' element={<Blog />}/>
          <Route path='/userProfile' element={<UserProfile />}  />
          <Route path='/editBlog/:id'  element={<EditBlog />}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
