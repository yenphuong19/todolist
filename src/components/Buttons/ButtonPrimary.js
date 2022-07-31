import { useState, useContext, useEffect } from 'react';
import { Context } from 'services/Context';
import { addTask, editTask, saveAction, setInfo } from 'services/reducer';
import { MODE_CREATE, MODE_CREATE_WITH_MODAL } from 'constants/mode';
import styled from 'styled-components';

const Button = styled.button`
    color: #fff;
    background-color: #d75b39;
    
    padding: 6px 10px;
    font-weight: 500;
    border-radius: 6px;
    min-width: 70px;
    
    &:hover {
        opacity: 0.7;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

function ButtonPrimary ({ task, onSubmit }) {
    
    const [props] = useContext(Context)

    return (
        <Button 
            disabled={!task.name.trim()}
            onClick={onSubmit}
        >
            {props.mode === MODE_CREATE || props.mode === MODE_CREATE_WITH_MODAL ? 'Add' : 'Save'}
        </Button>
    )
}

export default ButtonPrimary;
