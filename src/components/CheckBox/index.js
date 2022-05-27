import React, { memo, useState, useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { completedAction } from '../../services/reducer';

function CheckBox () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const [checked, setChecked] = useState()
    const handleChecked = () => {
        setChecked(job.name)
        setTimeout(() => props.dispatch(completedAction(job)), 300)
    }

    return (
        <input 
            type="radio"
            checked={job.name === checked}
            className='job__item-checkbox'
            onChange={handleChecked}
        />
    )
}

export default memo(CheckBox);