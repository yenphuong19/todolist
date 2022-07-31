import { useContext, useState } from 'react';
import { Context } from 'services/Context';
import { getDateContent, getListRender } from 'services/todo';
import { format } from 'date-fns';
import TaskItem from 'components/TaskItem';
import TaskAdd from 'components/TaskAdd';
import styled from 'styled-components';

function TaskList ({ tasks, sectionHeader, isOverdue }) {
    const [props] = useContext(Context)
    let sectionHeaderContent
    if (sectionHeader && !isOverdue) {
        sectionHeaderContent = getDateContent(sectionHeader).value
    } else if (isOverdue && !sectionHeader) {
        sectionHeaderContent = 'Overdue'
    } else {
        sectionHeaderContent = ''
    }
    return (
       <div>
            <div className='header' style={{fontWeight: '600', margin: '20px 0 10px 0'}}>
                {sectionHeaderContent}
            </div>
            {
                tasks
                .map((task, index) => 
                    <TaskItem task={task} index={index} key={index}/>
                )
            }
            {isOverdue ? '' : <TaskAdd task={props.state.task} dateDefault={sectionHeader}/>}
       </div>
   )
}

export default TaskList;

TaskList.defaultProps = {
    task: []
}
