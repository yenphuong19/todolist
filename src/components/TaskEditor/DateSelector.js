import React, { memo, useState, useContext, useEffect, useRef } from 'react';
import { Context } from 'services/Context';
import { getDateContent } from 'services/todo';
import { changeDate, setInfo } from 'services/reducer';
import { DayPicker } from 'react-day-picker';
import useOnClickOutSide from 'services/hook/useOnClickOutSide';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';
import { MODE_EDIT } from 'constants/mode';

const Wrapper = styled.div`
    position: relative;
    padding-right: 10px;

    .selector {
        
    }
`;

const Button = styled.div`
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 1.3rem;
    background-color: #F0F2F5;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    i {
        padding-right: 6px;
    }
`;

const Selector = styled.div`
    position: absolute;
    left: 0;
    top: 110%;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 6px #c3c3c3;
    border-radius: 6px;
    font-size: 1.3rem;
    // display: none;

    // .show {
    //     display: block;
    // }

    button:hover {
        background-color: #F0F2F5;
    }
`;

function DateSelector ({ task, dateDefault }) {

    const [props] = useContext(Context)
    
    const [showDaySelector, setShowDaySelector] = useState(false)
    const [selectedDate, setSelectedDate] = useState(dateDefault)
    
    const dateButton = useRef()
    const dateSelector = useRef()

    const handleClickDateButton = () => {
        setShowDaySelector(prevState => !prevState)
    }
    const handleDayClick = e => {
        setShowDaySelector(!showDaySelector)
        setSelectedDate(e)
        props.mode === MODE_EDIT ? 
        props.dispatch(changeDate({ task, value: e || task.date })) :
        props.dispatch(setInfo({ name: 'date', value: e }))
    }
    console.log(selectedDate)

    useEffect(() => {
        dateButton.current.addEventListener('click', handleClickDateButton)
        return () => {
            dateButton.current.removeEventListener('click', handleClickDateButton)
        }
    },[])
    useOnClickOutSide(dateSelector, () => setShowDaySelector(false))
    
    return (
        <Wrapper>
            <Button ref={dateButton} style={{ color: `${getDateContent(selectedDate || task.date).color || '#333'}`}}>
                <i className="bi bi-calendar"></i>
                {getDateContent(selectedDate || task.date).value}
            </Button>

            <Selector style={{display: `${showDaySelector ? 'block' : 'none'}`}} ref={dateSelector}>
                <DayPicker 
                    defaultMonth={new Date()}
                    fromDate={new Date()}
                    mode='single'
                    showOutsideDays
                    selected={selectedDate || task.date}
                    onDayClick={(e) => handleDayClick(e)}
                />
            </Selector>
        </Wrapper>
    )
}

export default memo(DateSelector);
