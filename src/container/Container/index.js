import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import NoJob from '../../components/NoJob/index';
import JobList from '../../components/JobList/index';
import { MODE_CREATE } from '../../services/mode';

function Container () {
    const [props] = useContext(Context)

    if (props.state.jobs.length === 0) {
        props.setMode(MODE_CREATE)
        return <NoJob />
    } 

    return <JobList />
}

export default Container;