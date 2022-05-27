import React from 'react';
import ButtonPrimary from '../ButtonRounded/ButtonPrimary';
import './NoJob.scss'

function NoJob () {
    return (
        <div className="no-job">
            <img className="no-job__img" />
            <p>What tasks are on your mind?</p>
            <div className="btns">
                <ButtonPrimary />
            </div>
        </div>
    )
}

export default NoJob;