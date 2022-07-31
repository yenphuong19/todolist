import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "services/Context";
import { changeInfo, setInfo } from "services/reducer";
import useOnClickOutSide from "services/hook/useOnClickOutSide";
import styled from 'styled-components';
import { MODE_EDIT } from "constants/mode";

const Wrapper = styled.div`
    display: flex;
    position: relative;
`;

const Button = styled.div`
    border-radius: 6px;
    margin-left: 6px;
    padding: 0 6px;
    font-size: 1.5rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;

const ListSelector = styled.ul`
    position: absolute;
    left: 0;
    top: 110%;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 0 6px #c3c3c3;
    border-radius: 6px;
    z-index: 2;
    font-size: 1.3rem;
    overflow: hidden;
    padding-left: 0;
    margin-bottom: 0;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 10px;
        cursor: pointer;

        &:hover {
            background-color: #eee;
        }
    }

    @media (max-width: 740px) {
        left: -170px;
        top: 110%;
    }
`;

function Selector ({ task, nameSelector, optionsSelector, iconClassName }) {

    const [props] = useContext(Context)

    const button = useRef()
    const list = useRef()

    const iconColor = optionsSelector.find(option => {return option.value === task[nameSelector]}).color
    const iconElement = (color) => (
        <i 
            className={ `${iconClassName}${color ? '-fill' : ''}` } 
            style={{ color: `${color || 'currentColor'}` }}
        ></i>
    )
    
    const [showDropdownList, setShowDropdownList] = useState(false)
    const [showCheckMark, setShowCheckMark] = useState(task[nameSelector])
    const [icon, setIcon] = useState(<i className={`${iconClassName}${iconColor ? '-fill' : ''}`} style={{color: `${iconColor ? iconColor : ''}`}}></i>)
    
    console.log('render', showDropdownList)

    const handleClickButton = (e) => {
        console.log('click')
        e.preventDefault();
        setShowDropdownList(prevState => !prevState)
    }
    const handleChangeInfo = (params) => {
        setShowCheckMark(params.value);
        setShowDropdownList(!showDropdownList);
        setIcon(iconElement(params.color))

        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({name: nameSelector, task, value: params.value})) :
        props.dispatch(setInfo({ name: nameSelector, value: params.value}))
    }
    
    useEffect(() => {
        console.log('useEffect')
        button.current.addEventListener('click', handleClickButton)
        return () => {
            button.current.removeEventListener('click', handleClickButton)
        }
    }, [])
    useOnClickOutSide(list, () => {console.log('outside');setShowDropdownList(false)})

    return (
        <Wrapper>
            <Button ref={button}>{icon}</Button>
            <ListSelector ref={list} style={{display: `${showDropdownList ? 'block' : 'none'}`}}>
                {
                    optionsSelector.map(option => (
                        <li 
                            key={option.id}
                            onClick={() => handleChangeInfo(option)}
                        >
                            <span>
                                {iconElement(option.color)}
                                <span style={{marginLeft: '10px'}}>{option.value}</span>
                            </span>
                            <i className="bi bi-circle-fill" style={{display: `${showCheckMark === option.value ? 'inline-block' : 'none'}`, fontSize: '1rem', color: '#777'}}></i>
                        </li>
                    ))
                }
            </ListSelector>
        </Wrapper>
    )
}

export default Selector;