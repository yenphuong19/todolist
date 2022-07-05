import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_EDIT } from 'constants/mode';
import TaskEditor from '../TaskEditor';
import TaskView from '../TaskView';
import Buttons from '../Buttons/index';

function TaskItem ({ task, index }) {
    const [props] = useContext(Context)

    if (props.mode === MODE_EDIT && task.isEdit) {
            return (
                <div>
                    <div style={{border: '1px solid #ddd', borderRadius: '6px'}}>
                        <TaskEditor task={task} index={index}/>
                    </div>
                    <Buttons task={task} index={index}/>
                </div>
            )
        } 
        
    return <TaskView task={task} index={index}/>
    
}

export default TaskItem;