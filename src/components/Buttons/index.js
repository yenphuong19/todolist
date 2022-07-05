import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import styled from 'styled-components';

const StyledButtons = styled.div`
    margin: 8px 0 20px;
    font-size: 1.5rem;
    // display: block;
    text-align: right;
`;

function Buttons ({ task, index, mode }) {
    return (
        <StyledButtons>
            <ButtonSecondary task={task} index={index} mode/>  
            <ButtonPrimary task={task} index={index} mode/>  
        </StyledButtons>
    )
}

export default Buttons;

