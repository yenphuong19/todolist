import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { Images } from 'constants/index';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import TaskAdd from 'components/TaskAdd';
import Modal from 'components/Modal';

const NoTask = styled.div`
    margin-top: 70px;
    
    img {
        width: 300px;
        height: 260px;
    }
`; 

function Today() {
    const [props] = useContext(Context)

    switch (props.state.tasks.all.length) {
        case false:
            props.setMode(MODE_CREATE)
            return (
                <NoTask className="col-9">
                    <img src={Images.NOTASK_BACKGROUND} />
                    <p>Enjoy your day off</p>
                    {props.showModal && <Modal />}
                </NoTask>
            )
        default:
            return (
                <div>
                    {/* Header */}
                    <h1 style={{color: 'blue'}}>
                        <span >Today</span>
                        <small style={{fontSize: '1.2rem', paddingLeft: '6px'}}>{format(new Date, 'MMM dd')}</small>
                    </h1>

                    {/* Overdue Task */}
                    <TaskList tasks={props.state.tasks.all} dateHeader={new Date()} isOverdue/>

                    {/* Today Task */}
                    <TaskList tasks={props.state.tasks.all} dateHeader={new Date()}/>

                    {/* Modal */}
                    {props.showModal && <Modal />}
                </div>
            )
    } 
}

export default Today;