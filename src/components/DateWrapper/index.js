import React, { memo } from 'react';
import DateIcon from './DateIcon';
import DateContent from './DateContent';
import DateSelector from './DateSelector';
import './DateWrapper.scss';

function DateWrapper () {
    return (
        <div className="job__info-item date">
            <DateIcon />
            <DateContent />
            <DateSelector />
        </div>
    )
}

export default memo(DateWrapper);