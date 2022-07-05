import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { Images } from 'constants/index';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList/index';
import TaskAdd from 'components/TaskAdd';
import Modal from 'components/Modal';

const NoTask = styled.div`
    margin-top: 70px;
    
    img {
        width: 300px;
        height: 260px;
    }
`; 

function Home() {
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
                <div
                    className="col-9 d-flex flex-column vh-100"
                    style={{padding: '80px', maxWidth: '800px'}}
                >
                    <h2 className='task__header'>
                        <span className='pe-2'>Today</span>
                        <small style={{fontSize: '1.2rem', color: '#999'}}>{format(new Date, 'MMM dd')}</small>
                    </h2>
                    <TaskList />
                    <TaskAdd task={props.state.task}/>
                    {props.showModal && <Modal />}
                </div>
            )
    } 
}

export default Home;