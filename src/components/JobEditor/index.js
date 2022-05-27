import React, { useContext } from 'react';
import JobDescription from '../JobDescription/index';
import DateWrapper from '../DateWrapper/index'
import TimeWrapper from '../TimeWrapper/index'
import RepeatWrapper from '../RepeatWrapper/index'
import Reminder from '../JobActions/Reminder';
import './JobEditor.scss';
import JobName from '../JobName';

function JobEditor () {
    return (
        <li className="job__item editor">
            <JobName />
            <JobDescription />
            <div className="d-flex justify-content-between info__wrapper" >
                <div>
                    <DateWrapper />
                    <TimeWrapper />
                    <RepeatWrapper />
                </div>
                <Reminder />
            </div>
            
        </li>
    )
}

export default JobEditor;