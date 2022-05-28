import React, { useContext } from 'react';
import JobView from '../JobView/index';
import JobEditor from '../JobEditor/index';
import ButtonRounded from '../ButtonRounded/index';
import { Context, RenderContext } from '../../services/Context';
import { MODE_EDIT } from '../../services/mode';
import JobAdd from '../JobAdd';

function JobWrapper () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)

    // Show job editor của job đã render
    if (props.mode === MODE_EDIT && job.edited === true) {
        return (
            <>
                <JobEditor />
                <ButtonRounded />
            </>
        )
    } 
        
    if (job.id === null) {
        return (
            <JobAdd />
        )
    }

    return <JobView />
}

export default JobWrapper;