import React, { useContext } from 'react';
import UserContext from '../contexts/userContext';
import { Container, Forms } from '../styles/enterStyled';


export default function SignIn(){
    const { setTask, setEmail, setPassword, funcLogin } = useContext(UserContext);
    
    return(
        <Container>
            <Forms onSubmit={funcLogin}>
                <input name='email' type='email' placeholder='E-mail' required
                onChange={e => setEmail(e.target.value)} />
                <input name='senha' type='password' placeholder='Senha' required
                onChange={e => setPassword(e.target.value)} />
                <button>Entrar</button>
            </Forms>
            <p onClick={() => setTask(false)}>Primeira vez? Cadastre-se!</p>
        </Container>
    )
}