import React, { useContext } from 'react';
import { deleteJob } from '../../services/reducer';
import { Context, RenderContext } from '../../services/Context';

function Delete () {

    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const handleClick = param => {
        param.preventDefault();
        props.dispatch(deleteJob(index))
    }
    
    return (
        <button 
            className="btn btn-delete"
            onClick={(e) => handleClick(e)}
        ></button>
    )
}

export default Delete;