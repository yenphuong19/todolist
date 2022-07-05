import React, { useState, useContext } from 'react';
import { Context } from 'services/Context';
import { editTask, deleteTask, completedAction } from 'services/reducer';
import { MODE_EDIT } from 'constants/mode';
import styled from 'styled-components';

const StyledTaskActions = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    margin-right: 16px;
    display: ${props => props.showJobActions ? 'flex' : 'none'};

    button {
        width: 28px;
        height: 28px;
        border-radius: 50%;

        i {
            color: #fff;
        }
    }
`;

function TaskActions ({ task, index }) {

    const [props] = useContext(Context)

    const handleClickDone = () => props.dispatch(completedAction(task))
    const handleClickEdit = () => {
        props.setMode(MODE_EDIT);
        props.dispatch(editTask(task, true));
    }
    const handleClickDelete = () => props.dispatch(deleteTask(index))

    return (
        <StyledTaskActions showJobActions={props.showJobActions === task.id}>

            {/* Done task */}
            <button 
                className="d-flex align-items-center "
                onClick={handleClickDone}
                style={{backgroundColor: '#32C200'}}
            >
                <i class="bi bi-check-lg" style={{fontSize: '2rem', transform: 'translateX(-2px)'}}></i>
            </button>

            {/* Edit task */}
            <button 
                className="btn__icon"
                onClick={handleClickEdit}
                style={{backgroundColor: '#B1B1B1', marginLeft: '8px'}}
            >
                <i class="bi bi-pencil-fill"></i>
            </button>

            {/* Delete task */}
            <button 
                className="btn__icon"
                onClick={handleClickDelete}
                style={{backgroundColor: '#FF0000', marginLeft: '8px'}}
            >
                <i class="bi bi-trash-fill"></i>
            </button>

        </StyledTaskActions>
    )
}

export default TaskActions;