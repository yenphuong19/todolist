import React, { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../services/Context';
import DateIcon from './DateIcon';
import DateContent from './DateContent';
import DateSelector from './DateSelector';
import './DateWrapper.scss';

function DateWrapper () {
    const [props] = useContext(Context)
    const button = useRef()
    const handleClick = () => props.setShowDayPicker(prevState => !prevState)

    useEffect(() => {
        button.current.addEventListener('click', handleClick)
        return () => {
            button.current.removeEventListener('click', handleClick)
        }
    },[])

    return (
        <div className="job__info-item date">
            <button 
                className='job__info-button date__button'
                ref={button}
            >
                <DateIcon />
                <DateContent />
            </button>

            <DateSelector />

        </div>
    )
}

export default memo(DateWrapper);