import React, { useContext, useRef } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { setInfo } from 'services/reducer';
import TaskEditor from 'components/TaskEditor';
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
    dateDefault: new Date()
}
function TaskAdd ({ task, dateDefault }) {
    const [props] = useContext (Context)
    const buttonRef = useRef()
    
    
    const handleClickAdd = () => {
        // Change mode để không hiện task editor của task đã render
        props.setMode(MODE_CREATE)
        props.setShowTaskEditor(dateDefault)
        props.dispatch(setInfo({name: 'date', value: dateDefault}))
    }

    if (getDateContent(dateDefault).value === getDateContent(props.showTaskEditor).value && props.mode === MODE_CREATE) {
        return <TaskEditor task={task} dateDefault={dateDefault}/>
    }
    return (
        <Wrapper 
            className="d-flex align-items-center"
            onClick={handleClickAdd}
            ref={buttonRef}
        >
            <i className="bi bi-plus-circle-fill" style={{fontSize: '1.7rem'}}></i>
            <span>Add new task</span>
        </Wrapper>
    )   
  
}

export default TaskAdd;