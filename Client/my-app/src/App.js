import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateNew from "./Views/CreateNew"
import DisplayAll from './Views/displayAll';
import EditBlog from "./Views/EditBlog";
import Home from "./Views/Home"

export default function App() {
  
  return (
    
    <Router>
        <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/displayAll">Display All</Link>  <br />
            <Link to="/createNew">Create New</Link>  <br />
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/displayAll" element={<DisplayAll />}/>
            <Route path="/createNew" element={<CreateNew />} />
            <Route path="/editBlog/:id" element={<EditBlog />}/> 
            
        </Routes>
    </Router>
    
  );
}