import React, { memo, useContext } from 'react';
import { Context } from '../../services/Context';
import SearchBox from '../SearchBox/index';
import { MODE_SEARCH } from '../../services/mode';

function ButtonSearch () {
    const [props] = useContext(Context)
    console.log('render')
    if (props.mode === MODE_SEARCH) {
        return <SearchBox />
    }
    return (
        <button 
            className="btn btn-search"
            onClick={() => props.setMode(MODE_SEARCH)}
        ></button>
    )
}

export default memo(ButtonSearch);