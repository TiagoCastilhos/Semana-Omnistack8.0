import React, { useEffect, useState } from 'react';
import Api from '../services/Api'
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

import './Main.css';
import api from '../services/Api';

const Main = ({match}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get(`/devs`, {
                headers: {
                    user: match.params.id
                }
            });
            setUsers();
        };
        loadUsers();        
    }, [match.params.id]);

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map(user => (             
                <li key={user._id}>
                    <img src="https://avatars3.githubusercontent.com/u/36007271?v=4" alt="avatar" />
                    <footer>
                        <strong>user.name</strong>
                        <p>user.bio</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                ))};                
            </ul>
        </div>
    )
}

export default Main;