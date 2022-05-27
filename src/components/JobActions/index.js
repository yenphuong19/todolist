import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import Reminder from './Reminder';
import Edit from './Edit';
import Delete from './Delete';
import './JobActions.scss';

function JobActions () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    return (
        <div className={`job__item-actions ${props.showJobActions === job.name ? 'show' : ''}`}>
            <Reminder />
            <Edit />
            <Delete />
        </div>
    )
}

export default JobActions;