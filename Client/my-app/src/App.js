import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateNew from "./Views/CreateNew"
import DisplayAll from './Views/DisplayAll';
import EditBlog from "./Views/EditBlog";

export default function App() {
  
  return (
    
    <Router>
        {/* <nav>
            <Link to="/">Home</Link> <br />
            <Link to="/createNew">Create New</Link>  <br />
        </nav> */}
        <Routes>
            <Route path="/" element={<DisplayAll />}/>
            <Route path="/createNew" element={<CreateNew />} />
            <Route path="/editBlog/:id" element={<EditBlog />}/> 
            
        </Routes>
    </Router>
    
  );
}