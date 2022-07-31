import { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Modal from 'components/Modal';
import TaskItem from 'components/TaskItem';
import TaskCompleted from 'components/TaskCompleted';
import { Images } from 'constants';

const NoTask = styled.div`
    margin: 20px;
    width: 240px;
    margin: auto;
    color: #777;

    p {
        text-align: center
    }
`; 

function Completed () {
    const [props] = useContext(Context)
    const count = props.state.tasks.completed.length
    const HaveCompletedTask = 
        props.state.tasks.completed
            .map(task => <TaskCompleted task={task}/>)
   
    const NoCompletedTask = 
        <NoTask>
            <img src={Images.NO_COMPLETEDTASK} />
            <p>No activity</p>
        </NoTask>
    return (
        <div>
            {/* Header */}
            <h1>Completed Tasks</h1>
            
            {/* Task List */}
            {count ? HaveCompletedTask : NoCompletedTask}

        </div>
    )
}

export default Completed;