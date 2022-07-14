import { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Modal from 'components/Modal';
import TaskItem from 'components/TaskItem';
import TaskCompleted from 'components/TaskCompleted';

function Completed () {
    const [props] = useContext(Context)
   
    return (
        <div>
            {/* Header */}
            <h1>Completed Tasks</h1>
            
            {/* Task List */}
            {
                props.state.tasks.completed
                    .map(task => <TaskCompleted task={task}/>)
            }

            {/* Modal */}
            {props.showModal && <Modal />}
        </div>
    )
}

export default Completed;