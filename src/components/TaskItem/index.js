import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_EDIT } from 'constants/mode';
import TaskEditor from '../TaskEditor';
import TaskView from '../TaskView';

function TaskItem ({ task, index }) {
    const [props] = useContext(Context)

    if (props.mode === MODE_EDIT && task.isEdit) {
        return <TaskEditor task={task} index={index}/>
    } 
        
    return <TaskView task={task} index={index}/>
    
}

export default TaskItem;