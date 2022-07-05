import React, { useState, useReducer } from 'react';
import initState from './initState';
import reducer from './reducer';
import { FILTER_ACTIVE } from 'constants/filter'
import { MODE_NONE } from 'constants/mode';
import { Context } from './Context';

function Provider ({children}) {

    const [state, dispatch] = useReducer(reducer, initState)
    const [mode, setMode] = useState(MODE_NONE)
    const [filter, setFilter] = useState(FILTER_ACTIVE)
    const [query, setQuery] = useState('')
    const [showTaskEditor, setShowTaskEditor] = useState()
    const [showJobActions, setShowJobActions] = useState()
    const [showModal, setShowModal] = useState()
    
    const props = {
        state,
        dispatch,
        mode,
        setMode,
        filter,
        setFilter,
        query,
        setQuery,
        showTaskEditor,
        setShowTaskEditor,
        showJobActions,
        setShowJobActions,
        showModal,
        setShowModal
    }

    return (
        <Context.Provider value={[props]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;