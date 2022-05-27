import React, { useState } from 'react';
import TimeIcon from './TimeIcon';
import TimeContent from './TimeContent';
import TimeSelector from './TimeSelector';
import './TimeWrapper.scss';

function TimeWrapper () {

    return (
        <div className="job__info-item time">
            <TimeIcon />
            <TimeContent />
            <TimeSelector />
        </div>
    )
}

export default TimeWrapper;