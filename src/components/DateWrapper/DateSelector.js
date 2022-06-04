import React, { memo, useContext, useRef } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { changeDate } from '../../services/reducer';
import { DayPicker } from 'react-day-picker';
import UseOnClickOutSide from '../../services/hook/UseOnClickOutSide';
import 'react-day-picker/dist/style.css';

function DateSelector() {

    const [props] = useContext(Context)
    const [job] = useContext(RenderContext)
    const dateSelector = useRef()
    const handleDayClick = e => {
        props.setSelectedDay(e);
        props.dispatch(changeDate(job, e));
        setTimeout(() => props.setShowDayPicker(!props.showDayPicker), 100)
    }
    
    UseOnClickOutSide(dateSelector, () => props.setShowDayPicker(false))
    
    return (
        <div className="job__info-selector date__selector" ref={dateSelector}>
            {
                props.showDayPicker
                && 
                <DayPicker 
                    defaultMonth={new Date()}
                    fromDate={new Date()}
                    mode='single'
                    showOutsideDays
                    selected={job.date}
                    onSelect={handleDayClick}
                />
            }
        </div>
    )
}

export default memo(DateSelector);