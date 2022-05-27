import React, { useState, useReducer } from 'react';
import { Context } from '../../services/Context';
import reducer, { initState } from '../../services/reducer';
import { FILTER_ACTIVE } from '../../services/filter'
import { MODE_NONE } from '../../services/mode';

function Provider ({children}) {

    const [state, dispatch] = useReducer(reducer, initState)
    const [mode, setMode] = useState(MODE_NONE)
    const [filter, setFilter] = useState(FILTER_ACTIVE)
    const [query, setQuery] = useState('')
    const [showJobEditor, setShowJobEditor] = useState ()
    const [selectedDay, setSelectedDay] = useState(new Date())
    const [showDayPicker, setShowDayPicker] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showRepeat, setShowRepeat] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const [showJobActions, setShowJobActions] = useState(false)
    
    const props = {
        state,
        dispatch,
        mode,
        setMode,
        filter,
        setFilter,
        query,
        setQuery,
        showJobEditor,
        setShowJobEditor,
        selectedDay,
        setSelectedDay,
        showDayPicker,
        setShowDayPicker,
        showTimePicker,
        setShowTimePicker,
        showRepeat,
        setShowRepeat,
        disabledButton,
        setDisabledButton,
        showJobActions,
        setShowJobActions
    }

    return (
        <Context.Provider value={[props]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;