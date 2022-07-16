import { useState, useContext, useEffect } from 'react';
import { Context } from 'services/Context';
import { addTask, editTask, saveAction, setInfo } from 'services/reducer';
import { MODE_CREATE, MODE_NONE } from 'constants/mode';
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

function ButtonPrimary ({ task }) {
    
    const [props] = useContext(Context)

    const [disabledButton, setDisabledButton] = useState(false)

    const handleClickAddButton = () => {
        props.dispatch(addTask(task));
        props.dispatch(setInfo({name: 'name', value: ''}));
        props.dispatch(setInfo({name: 'description', value: ''}));
        props.dispatch(setInfo({name: 'repeat', value: 'None'}));
        props.dispatch(setInfo({name: 'priority', value: 'None'}));
        props.dispatch(setInfo({name: 'label', value: 'None'}));
        props.setMode(MODE_NONE)
        props.setShowModal(false)
    }
    const handleClickSaveButton = () => {
        props.dispatch(editTask(task, false));
        props.dispatch(saveAction())
        props.setMode(MODE_NONE)
    }

    useEffect(() => {
        task.name === '' ? setDisabledButton(true) : setDisabledButton(false)
    }, [task.name])

    return (
        <Button 
            disabled={disabledButton}
            onClick={props.mode === MODE_CREATE ? handleClickAddButton : handleClickSaveButton}
        >
            {props.mode === MODE_CREATE ? 'Add' : 'Save'}
        </Button>
    )
}

export default ButtonPrimary;
