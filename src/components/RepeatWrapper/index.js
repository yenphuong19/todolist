import React, { useContext, useEffect, useRef } from 'react';
import RepeatIcon from './RepeatIcon';
import RepeatContent from './RepeatContent';
import RepeatSelector from './RepeatSelector';
import './RepeatWrapper.scss';
import { Context } from '../../services/Context';

function RepeatWrapper () {
    const [props] = useContext(Context)
    const button = useRef()
    const handleClick = () => props.setShowRepeat(prevState => !prevState)

    useEffect(() => {
        button.current.addEventListener('click', handleClick)
        return () => {
            button.current.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className="job__info-item repeat">
            <button 
                className='job__info-button repeat__button'
                ref={button}
            >
                <RepeatIcon />
                <RepeatContent />
            </button>
                
            <RepeatSelector />
        </div>
    )
}

export default RepeatWrapper;