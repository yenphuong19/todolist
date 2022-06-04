import React, { useContext, useRef, useState } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { changeRepeat } from '../../services/reducer';
import { repeatList } from '../../services/repeat';
import CheckMark from '../CheckMark/CheckMark';
import UseOnClickOutSide from '../../services/hook/UseOnClickOutSide';

function RepeatSelector () {
    const [props] = useContext(Context)
    const [job] = useContext(RenderContext)
    const repearList = useRef()
    const [showCheckMark, setShowCheckMark] = useState(job.repeat)
    const handleClick = (repeat) => {
        props.dispatch(changeRepeat(job, repeat));
        setShowCheckMark(repeat)
        setTimeout(() => props.setShowRepeat(!props.showRepeat), 100);
    }
    UseOnClickOutSide(repearList, () => props.setShowRepeat(false))
    
    return (
        <div ref={repearList}>
            {
                props.showRepeat 

                && 
                
                <ul className='job__info-selector repeat__selector'>
                    {repeatList.map((repeat, index) => 
                        <li 
                            key={index}
                            onClick={() => handleClick(repeat)}
                        >
                            {repeat}
                            {showCheckMark === repeat && <CheckMark />}
                        </li>

                    )}
                </ul>
            }
        </div>
    )
}

export default RepeatSelector;