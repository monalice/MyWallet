import React, { useContext } from 'react';
import styled from 'styled-components';

import SignIn from './SignIn';
import SignUp from './SignUp';
import UserContext from '../contexts/userContext';

export default function Main(){
    const { task } = useContext(UserContext);
    return(
        <Container>
            <div>
                <h1>MyWallet</h1>
            </div>
            <div>
                {task ? <SignIn /> : <SignUp />}
            </div>
        </Container>
    )
}

const Container = styled.section `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h1 {
        margin: 15px 0;
    }
`;