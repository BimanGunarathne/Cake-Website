import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App(){
  return (
    <div className="App">
      <Router>
        <Link to="/creaeUser">Create a user</Link>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/createUser" exact Component={Admin}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;