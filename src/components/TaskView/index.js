import React, { useContext } from 'react';
import { Context } from 'services/context/Context';
import { getDateContent } from 'services/todo';
import { PRIORITY_OPTIONS, LABEL_OPTIONS } from 'constants/index';
import TaskActions from '../TaskActions/index';
import styled from 'styled-components';

const Wrapper = styled.li`
    display: flex; 
    position: relative;
    border-radius: 6px;
    padding: 6px 16px;
    margin: 12px 0;
    box-shadow: 0 0 2px #c3c3c3;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 6px #c3c3c3;
    }

    .info {
        display: flex;
        font-size: 1.2rem;
        padding-top: 8px;
    }
`;

const Name = styled.div`
    i {
        font-size: 1.7rem;
        margin-left: -6px;
    }
`;

function TaskView ({ task, index }) {
    const [props] = useContext(Context)
    const labelColor = LABEL_OPTIONS.find(label => {return label.value === task.label}).color
    const priorityColor = PRIORITY_OPTIONS.find(priority => {return priority.value === task.priority}).color
    return (
        <Wrapper 
            className="d-flex flex-column bg-white"
            onMouseOver={() => props.setShowJobActions(task.id)}
            onMouseOut={() => props.setShowJobActions()}
        >
            <Name className='d-flex align-items-center'>
                <i 
                    className="bi bi-exclamation-lg" 
                    style={{
                        color: `${priorityColor}`,
                        display: `${task.priority === 'None' ? 'none' : 'flex'}`
                    }}
                ></i>
                {task.name}
            </Name>

            <span 
                style={{
                    display: `${task.description ? 'block' : 'none'}`,
                    fontSize: '1.2rem',
                    color: '#999',
                }}
            >
                {task.description}
            </span>

            <div className="info d-flex justify-content-between">
                <div className='d-flex'>
                     {/* Date */}
                    <span 
                        className='d-flex align-items-center'
                        style={{color: `${getDateContent(task.date).color || '#333'}`}}
                    >
                        <i 
                            className="bi bi-calendar" 
                            style={{paddingRight: '4px'}}
                        
                        ></i>
                        {getDateContent(task.date).value}
                    </span>

                    {/* Repeat */}
                    <span 
                        className='align-items-center'
                        style={{
                            display: `${task.repeat === 'None' ? 'none' : 'flex'}`,
                            paddingLeft: '20px',
                        }}
                    >
                        <i className="bi bi-arrow-repeat" style={{paddingRight: '4px', fontSize: '1.5rem'}}></i>
                        {task.repeat}
                    </span>
                </div>
               
                
                {/* Label */}
                <span className='align-items-center' style={{display: `${task.label === 'None' ? 'none' : 'flex'}`}}>
                    {task.label}
                    <i 
                        className="bi bi-circle-fill" 
                        style={{
                            fontSize: '0.8rem', 
                            color: `${labelColor}`,
                            paddingLeft: '4px',
                        }}
                    ></i>
                </span>
            </div>

            <TaskActions task={task} index={index}/>

        </Wrapper>
    )
}

export default TaskView;