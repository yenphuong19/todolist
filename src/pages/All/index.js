import React, { useContext } from "react"
import { Context } from "services/Context"
import Modal from 'components/Modal';
import TaskAdd from "components/TaskAdd"
import TaskItem from "components/TaskItem"
import TaskList from "components/TaskList";

function All () {
    const [props] = useContext (Context)
    return (
        <div>
            <h1 style={{color: '#333', marginBottom: '24px'}}>My task</h1>

            <TaskList tasks={props.state.tasks.all}/>

        </div>
    )
}

export default All;