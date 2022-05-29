import React, { useState, useContext, useEffect } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { MODE_NONE } from '../../services/mode';
import DescriptionEditor from './DescriptionEditor';
import DescriptionView from './DescriptionView';
import './JobDescription.scss';

function JobDescription () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const [showJobDescription, setShowJobDescription] = useState()

    useEffect(() => {
        job.description ? setShowJobDescription(true) : setShowJobDescription(false)
    }, 
        [job.description]
    )
   
    // Khi edit job >> render ô input có thể chỉnh sửa
    if (props.mode !== MODE_NONE && job.edited) {
        return <DescriptionEditor />
    }

    return (showJobDescription ? <DescriptionView /> : '')

}

export default JobDescription;