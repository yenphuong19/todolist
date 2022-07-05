import React from 'react';
import Name from './Name';
import Description from './Description';
import DateSelector from './DateSelector';
import RepeatSelector from './RepeatSelector';
import Selector from './Selector';
import { LABEL_OPTIONS, PRIORITY_OPTIONS } from "constants/index";
import styled from 'styled-components';

const StyledTaskEditor = styled.li`
    border-radius: 6px;
    padding: 10px 16px;
`;

function TaskEditor ({ task }) {
    return (
        <StyledTaskEditor className="d-flex flex-column bg-white">
            <Name task={task}/>
            <Description task={task}/>
            <div className="d-flex justify-content-between info__wrapper">
                <div className='d-flex'>
                    <DateSelector task={task}/>
                    <RepeatSelector task={task}/>
                </div>
                <div className='d-flex' style={{marginRight: '-10px'}}>
                    <Selector task={task} nameSelector='priority' optionsSelector={PRIORITY_OPTIONS} iconClassName='bi bi-flag'/>
                    <Selector task={task} nameSelector='label' optionsSelector={LABEL_OPTIONS} iconClassName='bi bi-bookmark'/>
                </div>
            </div>
        </StyledTaskEditor>
    )
}

export default TaskEditor;
