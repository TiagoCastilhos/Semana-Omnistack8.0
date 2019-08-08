import React from 'react';
import logo from '../assets/logo.svg';
import './login.css';

const Login = () => {
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="tindev"/>
                <input placeholder="Digite seu usuario do GitHub" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login;