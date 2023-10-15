import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Admin from './pages/Admin';
import RegesterAdmins from './pages/RegesterAdmins';

function App() {


  return (
    <div className='App'>
      <Router>
        <Link to="/registeradmins">Register Admins</Link>
        <Link to="/">Admin Page</Link>
        <Routes>
          <Route path="/" exact Component={Admin} />
          <Route path="/registeradmins" exact Component={RegesterAdmins} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;