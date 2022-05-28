import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { addJob, editJob } from '../../services/reducer';
import { MODE_CREATE, MODE_NONE } from '../../services/mode';

function ButtonPrimary () {
    const [props] = useContext(Context)
    const [job] = useContext(RenderContext)
    if (props.mode === MODE_CREATE) {
        return (
            <button 
                disabled={props.disabledButton}
                className="btn-primary"
                onClick={() => {
                    props.dispatch(addJob(job));
                    props.setMode(MODE_NONE)
                }}
            >
                Add
            </button>
        )
    } 
    return (
        <button 
            disabled={props.disabledButton}
            className="btn-primary"
            onClick={() => props.dispatch(editJob())}
        >
            Save
        </button>
    )
}

export default ButtonPrimary;

