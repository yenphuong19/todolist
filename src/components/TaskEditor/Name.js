import React, { useContext, useState } from 'react';
import { Context } from 'services/Context';
import { changeInfo, setInfo } from 'services/reducer';
import { MODE_EDIT } from 'constants/mode';

function Name ({ task }) {
    const [props] = useContext(Context)
    const [name, setName] = useState(task.name)
    const handleChangeName = e => {
        setName(e.target.value)
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: 'name', task, value: e.target.value })) : 
        props.dispatch(setInfo({ name: 'name', value: e.target.value }))
    }
    return (
        <input 
            autoFocus
            value={props.mode === MODE_EDIT ? name : props.state.task.name}
            placeholder="Task name"
            onChange={handleChangeName}
            style={{fontSize: '1.5rem', fontWeight: '500', border: 'none'}}
        />
    )
}

export default Name;