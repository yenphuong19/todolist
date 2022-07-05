import React, { memo, useState, useContext, useEffect, useRef } from 'react';
import { Context } from 'services/Context';
import { getDateContent } from 'services/todo';
import { changeInfo, setInfo } from 'services/reducer';
import { DayPicker } from 'react-day-picker';
import UseOnClickOutSide from 'services/hook/UseOnClickOutSide';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import { MODE_EDIT } from 'constants/mode';

const StyledDateSelector = styled.div`
    position: relative;
    padding-right: 10px;

    button {
        border-radius: 8px;
        padding: 4px 10px;
        font-size: 1.3rem;

        &:hover {
            opacity: 0.7;
        }

        i {
            padding-right: 6px;
        }
    }

    .selector {
        position: absolute;
        left: 0;
        top: 110%;
        z-index: 2;
        background-color: #fff;
        box-shadow: 0 0 6px #c3c3c3;
        border-radius: 6px;
        font-size: 1.3rem;
        display: none;

        &.show {
            display: block;
        }

        button {

            &:hover {
                background-color: #F0F2F5;
            }
        }
    }
`;

function DateSelector ({ task }) {

    const [props] = useContext(Context)

    const [showDayPicker, setShowDayPicker] = useState(false)

    const button = useRef()
    const dateSelector = useRef()

    const handleClickDateButton = () => setShowDayPicker(prevState => !prevState)
    const handleDayClick = e => {
        setShowDayPicker(!showDayPicker)
        props.mode === MODE_EDIT ? 
        props.dispatch(changeInfo({ name: 'date', task, value: e || task.date })) :
        props.dispatch(setInfo({ name: 'date', value: e }))
    }

    useEffect(() => {
        button.current.addEventListener('click', handleClickDateButton)
        return () => {
            button.current.removeEventListener('click', handleClickDateButton)
        }
    },[])
    UseOnClickOutSide(dateSelector, () => setShowDayPicker(false))
    
    return (
        <StyledDateSelector>

            <button ref={button} style={{backgroundColor: '#F0F2F5'}}>
                <i class="bi bi-calendar"></i>
                {getDateContent(task.date).content}
            </button>

            <div className={`selector ${showDayPicker ? 'show' : ''}`} ref={dateSelector}>
                <DayPicker 
                    defaultMonth={new Date()}
                    fromDate={new Date()}
                    mode='single'
                    showOutsideDays
                    selected={task.date}
                    onDayClick={(e) => handleDayClick(e)}
                />
            </div>

        </StyledDateSelector>
    )
}

export default memo(DateSelector);
