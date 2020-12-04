import React, { useContext } from 'react';
import UserContext from '../contexts/userContext';
import { Container, Forms } from '../styles/enterStyled';

export default function SignUp(){
    const { setTask, setName, setEmail, setPassword, setConfirmPassword, funcSignUp } = useContext(UserContext);
    return(
        <Container>
            <Forms onSubmit={funcSignUp} >
                <input name='nome' type='text' placeholder='Nome' required
                    onChange={e => setName(e.target.value)} />
                <input name='email' type='email' placeholder='E-mail' required
                    onChange={e => setEmail(e.target.value)} />
                <input name='senha' type='password' placeholder='Senha' required
                    pattern='^(?=.*[!@#$%*+])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[!@#$%*+a-zA-Z0-9]{6,10}$'
                    onChange={e => setPassword(e.target.value)} />
                <input name='confirmSenha' type='password' placeholder='Confirme a Senha' required
                    onChange={e => setConfirmPassword(e.target.value)} />
                <button>Cadastrar</button>
            </Forms>
            <p onClick={() => setTask(true)}>Já tem uma conta? Entre agora!</p>
        </Container>
    )
}