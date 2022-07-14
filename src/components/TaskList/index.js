import { useContext, useState } from 'react';
import { Context } from 'services/Context';
import { getDateContent, getListRender } from 'services/todo';
import { format } from 'date-fns';
import TaskItem from 'components/TaskItem';
import TaskAdd from 'components/TaskAdd';
import styled from 'styled-components';

function TaskList ({ tasks, dateHeader, isOverdue }) {
    const [props] = useContext(Context)
  
    return (
       <div>
            <div className='header' style={{fontWeight: '600', margin: '20px 0 10px 0'}}>
                {isOverdue ? 'Overdue' : <> 
                    {getDateContent(dateHeader).value}
                </>}
            </div>
            {
                tasks
                .filter(task => {
                    if (isOverdue) {
                        return (task.date < new Date()) && getDateContent(task.date).value !== getDateContent(dateHeader).value
                    }
                    return getDateContent(task.date).value === getDateContent(dateHeader).value
                })
                .map((task, index) => 
                    <TaskItem task={task} index={index} key={index}/>
                )
            }
            {isOverdue ? '' : <TaskAdd task={props.state.task} dateHeader={dateHeader}/>}
       </div>
   )
}

export default TaskList;

TaskList.defaultProps = {
    task: [],
    dateHeader: Date(),
    isOverdue: undefined
}
