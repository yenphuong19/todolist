import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import { addJob, editJob } from '../../services/reducer';
import { MODE_CREATE } from '../../services/mode';

function ButtonPrimary () {
    const [props] = useContext(Context)
    if (props.mode === MODE_CREATE) {
        return (
            <button 
                className="btn-primary"
                onClick={() => props.dispatch(addJob({name: 'ten', date: new Date(), repeat: 'none'}))}
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

