import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import Modal from 'components/Modal';
import { uniqueArray } from 'services/todo';

function Scheduled () {
    const [props] = useContext(Context)
    const dateArray = props.state.tasks.all
        .filter(task => { return task.date > new Date() })
        .map(task => task.date)
        .sort((a, b) => {return b < a ? 1 : -1})

    return (
        <div>
            {/* Header */}
            <h1 style={{color: '#d1453b'}}>Scheduled</h1>
            
            {/* Task List */}
            {
                uniqueArray(dateArray)
                    .map((date, index) => <TaskList tasks={props.state.tasks.all} dateHeader={date} key={index}/>)
            }

            {/* Modal */}
            {props.showModal && <Modal />}
        </div>
    )
}

export default Scheduled;