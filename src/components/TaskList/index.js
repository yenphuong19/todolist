import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { getListRender } from 'services/todo';
import TaskItem from '../TaskItem/index';
import styled from 'styled-components';
import { format } from 'date-fns';

const StyledTaskList = styled.div`

`;

function TaskList ({ list, dateToCompare }) {
    const [props] = useContext(Context)
    // return (
    //     <div className="task__list">

    //         {/* Overdue Task */}
    //         <div style={{fontWeight: '600', marginTop: '24px'}}>Overdue</div>
    //         {
    //             getListRender(props.state.tasks, props.mode, props.filter, props.query)
    //                 .filter(task => {
    //                     return (task.date < new Date()) && (task.date.toLocaleDateString() != new Date().toLocaleDateString())
    //                 })
    //                 .map((task, index) => 
    //                     <TaskItem 
    //                         task={task}
    //                         index={index}    
    //                         key={index}                    
    //                     />
    //                 )
    //         }

    //         {/* Today Task */}
    //         <div style={{fontWeight: '600', marginTop: '24px'}}>
    //             Today
    //             <i class="bi bi-dot"></i>
    //             {format(new Date, 'MMM dd')}
    //         </div>
    //         {
    //             getListRender(props.state.tasks, props.mode, props.filter, props.query)
    //                 .filter(task => {
    //                     return task.date.toLocaleDateString() === new Date().toLocaleDateString()
    //                 })
    //                 .map((task, index) => 
    //                     <TaskItem 
    //                         task={task}
    //                         index={index}    
    //                         key={index}                    
    //                     />
    //                 )
    //         }
    //     </div>
    // )
   return (
       <div>
           
       </div>
   )

}

export default TaskList;