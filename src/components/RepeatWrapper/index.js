import React, { useContext, useState } from 'react';
import RepeatIcon from './RepeatIcon';
import RepeatContent from './RepeatContent';
import RepeatSelector from './RepeatSelector';
import './RepeatWrapper.scss';

function RepeatWrapper () {
    return (
        <div className="job__info-item repeat">
            <RepeatIcon />
            <RepeatContent />
            <RepeatSelector />
        </div>
    )
}

export default RepeatWrapper;