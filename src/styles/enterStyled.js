import styled from 'styled-components';

export const Container = styled.div `
    text-align: center;
    p {
        margin: 10px;
        cursor: pointer;
    }
`;

export const Forms = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;

    input, button {
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        font-size: 20px;
        width: 80%;
    }
`;