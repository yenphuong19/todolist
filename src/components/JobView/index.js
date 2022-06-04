import React, { useContext, useState } from 'react';
import CheckBox from '../CheckBox/index';
import JobName from '../JobName/index';
import JobDescription from '../JobDescription/index';
import DateContent from '../DateWrapper/DateContent';
import TimeContent from '../TimeWrapper/TimeContent';
import RepeatContent from '../RepeatWrapper/RepeatContent';
import JobActions from '../JobActions/index';
import './JobView.scss';
import { Context, RenderContext } from '../../services/Context';

function JobView () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)

    return (
        <li 
            className="job__item"
            onMouseOver={() => props.setShowJobActions(job.id)}
            onMouseOut={() => props.setShowJobActions()}
        >

            <CheckBox />

            <div className="job__item-content">

                <JobName />

                <JobDescription />

                <div className="job__item-info">
                    <DateContent />;
                    <TimeContent />;
                    <RepeatContent />
                </div>

            </div>
            
            <JobActions />

        </li>
    )
}

export default JobView;