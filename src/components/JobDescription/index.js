import React, { useState, useContext, useEffect } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { MODE_EDIT } from '../../services/mode';
import { changeDescription } from '../../services/reducer';
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
    if (props.mode === MODE_EDIT && job.edited) {
        return (
            <input 
                className='job__description editor'
                placeholder="Description"
                value={job.description}
                onChange={e => props.dispatch(changeDescription(e.target.value, index)) }
            />
        )
    }

    return (
        <input 
            disabled
            className={`job__description ${showJobDescription ? '' : 'hidden'}`}
            value={job.description}
        />
    )

}

export default JobDescription;