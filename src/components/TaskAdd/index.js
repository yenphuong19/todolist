import React, { memo, useState, useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { editTask } from 'services/reducer';
import TaskEditor from 'components/TaskEditor';
import Buttons from '../Buttons';
import styled from 'styled-components';

const StyledTaskAdd = styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    color: #777;
    font-size: 1.4rem;
    text-align: flex-start;

    span {
        margin-left: 6px;
    }

    &:hover {
        color: #d75b39;
    }

    @media (max-width: 740px) {
        margin: 8px 0;
    }
`;

function TaskAdd ({ task }) {
    const [props] = useContext (Context)
    const handleClickAdd = () => {
        // Change mode để không hiện task editor của task đã render
        props.setMode(MODE_CREATE)
        props.setShowTaskEditor(true)
    }
    
    switch (props.showTaskEditor) {
        case true:
            return (
                <div>
                    <div style={{border: '1px solid #ddd', borderRadius: '6px'}}>
                        <TaskEditor task={task}/>
                    </div>
                    <Buttons task={task}/>
                </div>
            )

        default:
            return (
                <StyledTaskAdd 
                    className="d-flex align-items-center"
                    onClick={handleClickAdd}

                >
                    <i class="bi bi-plus-circle-fill" style={{fontSize: '1.7rem'}}></i>
                    <span>Add new task</span>
                </StyledTaskAdd>
            )   
    }
  
}

export default TaskAdd;