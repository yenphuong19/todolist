import React, { memo, useContext, useEffect, useRef } from 'react';
import { Context } from '../../services/Context';
import SearchBox from '../SearchBox/index';
import { MODE_SEARCH } from '../../services/mode';

function ButtonSearch () {
    const [props] = useContext(Context)
    const buttonSearch = useRef()
    const handleClick = () => {
        props.setMode(MODE_SEARCH)
    }
    useEffect(() => {
        buttonSearch.current.addEventListener('click', handleClick)
        return () => {
            buttonSearch.current.removeEventListener('click', handleClick)
        }
    }, [props.mode])
    console.log('render', props.mode)
    if (props.mode === MODE_SEARCH) {
        return <SearchBox />
    }
    return (
        <button 
            ref={buttonSearch}
            className="btn btn-search"
            // onClick={handleClick}
        ></button>
    )
}

export default memo(ButtonSearch);