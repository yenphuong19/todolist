import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { editJob } from '../../services/reducer';
import { MODE_EDIT } from '../../services/mode';

function Edit () {

    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const handleClick = param => {
        param.preventDefault();
        props.setMode(MODE_EDIT);
        props.dispatch(editJob(job.name, index, true));
    }
    
    return (
        <button 
            className="btn btn-edit"
            onClick={(e) => handleClick(e)}
        ></button>
    )
}

export default Edit;