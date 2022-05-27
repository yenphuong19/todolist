import React, { useContext } from 'react';
import { format } from 'date-fns';
import { Context } from '../../services/Context';
import { DayPicker } from 'react-day-picker';
import ButtonRounded from '../ButtonRounded/index';

function AddingArea () {
    const [props] = useContext(Context)
    const handleClickDateIcon = () => {
        props.setShowDayPicker(!props.showDayPicker);
        // Khi click vào daypicker >> ẩn picker còn lại
        props.setShowRepeat(false)
        props.setShowTimePicker(false)
    }
    return (
        <div style={{paddingLeft: '20px'}}>
            <div className="job__item editor" >

                {/* Name */}
                <input 
                    autoFocus
                    className="job__name editor"
                    value={props.state.job.name}
                    placeholder="Task name"
                    onChange={(e) => {
                        props.dispatch(props.editJob(e.target.value, true));
                    }}
                />

                {/* Description */}
                <input 
                    className='job__description editor'
                    placeholder="Description"
                    value={props.state.job.description}
                />

                {/* Date */}
                <div className="job__info-item date">
                    <button 
                        className="btn btn-date"
                        onClick={handleClickDateIcon}
                    ></button>
                    <span>{format(props.state.job.date, 'PP')}</span>
                    <div className="daypicker">
                        {
                            props.showDayPicker
                            && 
                            <DayPicker 
                                mode='single'
                                selected={props.selectedDay}
                                // onSelect={date => handleSelect(date)}
                                // onDayClick={e => handleDayClick(e)}
                            />
                        }
                    </div>
                </div>

            </div>

            <ButtonRounded />
        </div>
    )
}

export default AddingArea;