import { useContext } from 'react';
import { Context } from 'services/context/Context';
import { getDateContent } from 'services/todo';
import TaskItem from 'components/TaskItem';
import TaskAdd from 'components/TaskAdd';

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
