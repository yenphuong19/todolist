import { useState, useContext, useEffect, useRef } from 'react';
import { changeInfo, setInfo } from 'services/reducer';
import { REPEAT_OPTIONS } from 'constants/repeat';
import useOnClickOutSide from 'services/hook/useOnClickOutSide';
import { Context } from 'services/Context';
import styled from 'styled-components';
import { MODE_EDIT } from 'constants/mode';

const Wrapper = styled.div`
    position: relative;
`;

const Button = styled.div`
    border-radius: 8px;
    padding: 4px 10px;
    background-color: #f0f2f5;
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;

const Selector = styled.ul`
    position: absolute;
    left: 0;
    top: 110%;
    display: none;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 0 6px #c3c3c3;
    border-radius: 6px;
    z-index: 2;
    font-size: 1.3rem;
    overflow: hidden;
    padding-left: 0;
    margin-bottom: 0;

    &.show {
        display: block
    }

    li {
        display: flex;
        justify-content: space-between;
        padding: 6px 10px;
        align-items: center;

        &:hover {
            background-color: #f0f2f5;
            cursor: pointer;
        }
`;

function RepeatSelector ({ task }) {
    const [props] = useContext(Context)

    const [showDropdownList, setShowDropdownList] = useState(false)
    const [showCheckMark, setShowCheckMark] = useState(task.repeat)
    const [selectedRepeat, setSelectedRepeat] = useState(task.repeat)

    const button = useRef()
    const list = useRef()

    const handleClickRepeatButton = (e) => {
        e.preventDefault();
        setShowDropdownList(prevState => !prevState)
    }
    const handleClick = (repeat) => {
        setSelectedRepeat(repeat.value)
        setShowCheckMark(repeat.value)
        setShowDropdownList(!showDropdownList)
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: 'repeat', task, value: repeat.value})) :
        props.dispatch(setInfo({ name: 'repeat', value: repeat.value }))
    }
    
    useEffect(() => {
        button.current.addEventListener('click', handleClickRepeatButton)
        return () => {
            button.current.removeEventListener('click', handleClickRepeatButton)
        }
    }, [])
    useOnClickOutSide(list, () => setShowDropdownList(false))
    
    return (
        <Wrapper>
            <Button ref={button}>
                <i style={{paddingRight: '6px'}} className="bi bi-arrow-repeat"></i>
                <span>{selectedRepeat}</span>
            </Button>
                
            <Selector ref={list} className={showDropdownList ? 'show' : ''}>
                {REPEAT_OPTIONS.map((repeat, index) => 
                    <li 
                        key={index}
                        onClick={() => handleClick(repeat)}
                    >
                        {repeat.value}
                        <i className="bi bi-circle-fill" style={{display: `${showCheckMark === repeat.value ? 'inline-block' : 'none'}`, fontSize: '1rem', color: '#777'}}></i>
                    </li>
                )}
            </Selector>
        </Wrapper>
    )
}

export default RepeatSelector;