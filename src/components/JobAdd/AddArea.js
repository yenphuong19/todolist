import React, { useContext } from 'react';
import ButtonRounded from '../ButtonRounded/index';
import { format } from 'date-fns';
import { Context } from '../../services/Context';
import { DayPicker } from 'react-day-picker';
import { repeatList } from '../../services/repeat';
import { changeRepeat } from '../../services/reducer';

function AddArea () {
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

                {/* Time */}
                <div className="job__info-item time">
                    <button 
                        className="btn btn-time"
                        onClick={() => {
                            props.setShowTimePicker(!props.showTimePicker)
                            props.setShowDayPicker(false)
                            props.setShowRepeat(false)
                        }}
                    ></button>
                    <div>
                        {
                            props.showTimePicker
                            && 
                            <ul>
                                <li>Hour</li>
                                <li>Minute</li>
                            </ul>
                        }
                    </div>
                    <span>17:00</span>
                </div>
            
                {/* Repeat */}
                <div className="job__info-item repeat">
                    <button 
                        className="btn btn-repeat"
                        onClick={() => {
                            props.setShowRepeat(!props.showRepeat);
                            // Khi click vào repeatList >> ẩn picker khác
                            props.setShowDayPicker(false)
                            props.setShowTimePicker(false)
                        }}
                    ></button>
                    <span>{props.state.job.repeat}</span>
                    <div>
                        {
                            props.showRepeat 

                            && 
                            
                            <ul className="repeat__list">
                                {repeatList.map((repeat, index) => 
                                    <li 
                                        key={index}
                                        onClick={() => {
                                            props.dispatch(changeRepeat(props.state.job, repeat));
                                            setTimeout(() => props.setShowRepeat(!props.showRepeat), 100);
                                        }}
                                    >{repeat}</li>
                                )}
                            </ul>
                        }
                    </div>
                </div>

            </div>

            <ButtonRounded />
        </div>
    )
}

export default AddArea;