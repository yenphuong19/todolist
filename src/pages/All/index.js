import Modal from 'components/Modal';
import TaskAdd from "components/TaskAdd"
import TaskItem from "components/TaskItem"
import TaskList from 'components/TaskList';
import React, { useContext } from "react"
import { Context } from "services/Context"

function All () {
    const [props] = useContext (Context)
    return (
        <div>
            {/* Header */}
            <h1 style={{color: '#333', marginBottom: '24px'}}>My task</h1>

            {/* List */}
            {props.state.tasks.all
                .map((task, index) => 
                    <TaskItem task={task} index={index}/>
                )
            }
            <TaskAdd task={props.state.task}/>
            {/* <TaskList tasks={props.state.tasks.all}/> */}

            {/* Modal */}
            {props.showModal && <Modal />}
        </div>
    )
}

export default All;