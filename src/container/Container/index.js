import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import NoJob from '../../components/NoJob/index';
import JobList from '../../components/JobList/index';
import JobAdd from '../../components/JobAdd/index';
import { MODE_CREATE } from '../../services/mode';
import './Container.scss';

function Container () {
    const [props] = useContext(Context)

    console.log()

    if (props.state.jobs.all.length === 0) {
        props.setMode(MODE_CREATE)
        return <NoJob />
    } 

    return (
        <div className="containers">
            <JobList />
        </div>
    )
}

export default Container;