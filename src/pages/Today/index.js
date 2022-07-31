import React, { Fragment, useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_CREATE } from 'constants/mode';
import { Images } from 'constants/index';
import { format } from 'date-fns';
import styled from 'styled-components';
import TaskList from 'components/TaskList';
import TaskAdd from 'components/TaskAdd';
import Modal from 'components/Modal';
import { getDateContent, getListRender } from 'services/todo';

const Header = styled.h1`
    color: blue;
    margin-bottom: 24px;

    small {
        font-size: 1.2rem;
        padding-left: 6px
    }
`;

const NoTask = styled.div`
    margin: 20px;
    width: 240px;
    margin: auto;
    color: #777;

    p {
        text-align: center
    }
`; 

function Today() {
    const [props] = useContext(Context)

    const overdueList = getListRender(props.state.tasks.all, 'overdue')

    const todayList = getListRender(props.state.tasks.all, 'today')

    const NoTaskBackground = (
        <div>
            <TaskAdd task={props.state.task}/>
            <NoTask>
                <img src={Images.NOTASK_BACKGROUND} />
                <p>Enjoy your day off</p>
            </NoTask>
        </div>
    )

    const HaveTask = (
        <Fragment>
            {!!overdueList.length && <TaskList tasks={overdueList} isOverdue/>}
    
            {!!todayList.length && <TaskList tasks={todayList} sectionHeader={new Date()}/>}
    
            {!todayList.length && !overdueList.length && <TaskAdd task={props.state.task}/>}
        </Fragment>
    )
   
    return (
        <Fragment>
            <Header>
                <span>Today</span>
                <small>{format(new Date, 'MMM dd')}</small>
            </Header>
            {!!todayList.length ? HaveTask  :  NoTaskBackground}
        </Fragment>
    )
}

export default Today;