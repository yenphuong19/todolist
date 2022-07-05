import React, { memo, useState, useContext, useRef, useCallback } from 'react';
import { MODE_NONE, MODE_SEARCH } from 'constants/mode'
import { Context } from 'services/Context';
import { Images } from 'constants/index';
import styled from 'styled-components';

const StyledSearchBox = styled.div`
    position: relative;
    border: 1px solid transparent;
    padding: 4px 10px;
    width: 250px;
    border-radius: 6px;

    &:focus-within {
        border: 1px solid $primary-color;
    }

    input {
        font-size: 1.3rem;
        border-color: transparent;
        box-shadow: none;
        padding-left: 10px;

        &:focus-visible {
            outline: none;
        }
    }

    button > img {
        position: absolute;
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

function SearchBox() {
    const [props] = useContext(Context)
    const [show, setShow] = useState(false)
    const inputRef = useRef()
    const handleChange = e => {
        props.setMode(MODE_SEARCH)
        props.setQuery(e.target.value)
        e.target.value.length > 0 ? setShow(true) : setShow(false)
    }
    const handleDeleteValue = useCallback(() => {
        props.setQuery('');
        setShow(false)
        inputRef.current.focus()
    },[show])

    return (
        <StyledSearchBox className="search_box d-flex align-items-center bg-light">
            <img src={Images.SEARCH_ICON} alt="search-icon"></img>
            <input 
                ref={inputRef}
                type="text"
                placeholder="Search"
                value={props.query}
                onChange={handleChange}
            />
            {
                show 
                &&
                <button onClick={handleDeleteValue}>
                    <img src={Images.CLOSE_ICON} alt="close-icon"></img>
                </button>
            }
            
        </StyledSearchBox>
    )
}

export default memo(SearchBox);