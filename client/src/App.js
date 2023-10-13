import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  return <div className="App">{listOfUsers.map((value, key) => {
    return <div className="user">
        <div className="name">{value.name}</div>
        <div className="body">{value.username}</div>
        <div className="footer">{value.email}</div>
      </div>
  })}
  </div>
}

export default App;
