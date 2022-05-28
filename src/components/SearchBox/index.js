import React, { memo, useState, useContext, useRef, useCallback } from 'react';
import { Context } from '../../services/Context';
import { MODE_NONE } from '../../services/mode'
import './SearchBox.scss';
import SearchDelete from './SearchDelete';

function SearchBox() {
    const [props] = useContext(Context)
    const [show, setShow] = useState(false)
    const inputRef = useRef()
    const handleChange = param => {
        props.setQuery(param.target.value)
        param.target.value.length > 0 ? setShow(true) : setShow(false)
    }
    const handleDeleteValue = useCallback(() => {
        props.setQuery('');
        setShow(false)
        inputRef.current.focus()
    },[show])

    console.log([inputRef.current], 'render')
    return (
        <div className="search_box">
            <input 
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="form-control"
                value={props.query}
                onChange={e => handleChange(e)}
                onFocusOut={() => props.setMode(MODE_NONE)}
            />
            {
                show 
                &&
                <SearchDelete handleDeleteValue={handleDeleteValue}/>
            }
            
        </div>
    )
}

export default memo(SearchBox);