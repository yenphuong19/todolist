import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 8px 0 20px;
    font-size: 1.5rem;
    text-align: right;
`;

function Buttons ({ task }) {
    return (
        <Wrapper>
            <ButtonSecondary task={task}/>  
            <ButtonPrimary task={task}/>  
        </Wrapper>
    )
}

export default Buttons;

