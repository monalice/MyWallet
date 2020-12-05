import { createContext } from 'react';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props){
    const history = useHistory();

    const[ task, setTask ] = useState(true);
    const[ name, setName ] = useState('');
    const[ email, setEmail ] = useState('');
    const[ password, setPassword ] = useState('');
    const[ confirmPassword, setConfirmPassword ] = useState('');

    function funcLogin(e) {
        e.preventDefault();

        const body = { email, password };
        const req = axios.post('https://mywallet-api.herokuapp.com/sign-in', body);
        req.then((response) => {
            history.push('/home')
        })
        .catch((e) => {
            alert("Email ou senha incorretos..."); 
        });
    }

    function funcSignUp(e) {
        e.preventDefault();

        if(password !== confirmPassword) {
            return alert('As senhas digitadas devem ser iguais!')
        }

        const body = { name, email, password, confirmPassword };
        const req = axios.post('https://mywallet-api.herokuapp.com/sign-up', body);
        req.then((response) => {
            alert('Cadastrado! Realize o LogIn!');
            setTask(true);
        })
        .catch((e) => {
            alert("Email já cadastrado!"); 
        });
    }

    return(
        <UserContext.Provider value={{task, setTask, name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, funcLogin, funcSignUp}}>
            {props.children}
        </UserContext.Provider>
    )
} 