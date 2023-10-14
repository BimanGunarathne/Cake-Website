import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';

function Home() {

    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/users").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

    return (
        <div>
            {listOfUsers.map((value, key) => {
                return <div className="user">
                    <div className="name">{value.name}</div>
                    <div className="body">{value.username}</div>
                    <div className="footer">{value.email}</div>
                </div>
            })}
        </div>
    )
}

export default Home