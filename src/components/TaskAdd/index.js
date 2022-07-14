import React, { memo, useState, useContext, useRef } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { editTask, setInfo } from 'services/reducer';
import TaskEditor from 'components/TaskEditor';
import Buttons from '../Buttons';
import styled from 'styled-components';
import { getDateContent } from 'services/todo';

const Wrapper = styled.button`
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
TaskAdd.defaultProps = {
    task: [],
    dateHeader: new Date()
}
function TaskAdd ({ task, dateHeader }) {
    const [props] = useContext (Context)
    const buttonRef = useRef()
    
    
    const handleClickAdd = () => {
        // Change mode để không hiện task editor của task đã render
        props.setMode(MODE_CREATE)
        props.setShowTaskEditor(dateHeader)
        props.dispatch(setInfo({name: 'date', value: dateHeader}))
    }

    if (getDateContent(dateHeader).value === getDateContent(props.showTaskEditor).value && props.mode === MODE_CREATE) {
        return (
            <div>
                <div style={{border: '1px solid #ddd', borderRadius: '6px'}}>
                    <TaskEditor task={task} dateHeader={dateHeader}/>
                </div>
                <Buttons task={task} dateHeader={dateHeader}/>
            </div>
        )

        }
    return (
        <Wrapper 
            className="d-flex align-items-center"
            onClick={handleClickAdd}
            ref={buttonRef}
        >
            <i class="bi bi-plus-circle-fill" style={{fontSize: '1.7rem'}}></i>
            <span>Add new task</span>
        </Wrapper>
    )   
  
}

export default TaskAdd;