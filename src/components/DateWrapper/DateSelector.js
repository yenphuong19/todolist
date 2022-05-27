import React, { memo, useCallback, useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { changeDate } from '../../services/reducer';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function DateSelector() {

    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const handleSelect = param => {
        props.setSelectedDay(param);
        setTimeout(() => props.setShowDayPicker(!props.showDayPicker), 100)
    }
    const handleDayClick = param => props.dispatch(changeDate(job, param))
    
    return (
        <div className="daypicker">
            {
                props.showDayPicker
                && 
                <DayPicker 
                    mode='single'
                    selected={props.selectedDay}
                    onSelect={date => handleSelect(date)}
                    onDayClick={e => handleDayClick(e)}
                />
            }
        </div>
    )
}

export default memo(DateSelector);