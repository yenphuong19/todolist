import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { changeInfo, setInfo } from 'services/reducer';
import { MODE_EDIT } from 'constants/mode';

function Name ({ task }) {
    const [props] = useContext(Context)
    const handleChangeName = (param) => {
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: 'name', task, value: param })) : 
        props.dispatch(setInfo({ name: 'name', value: param }))
    }
    return (
        <input 
            autoFocus
            value={props.mode === MODE_EDIT ? task.name : props.state.task.name}
            placeholder="Task name"
            onChange={e => handleChangeName(e.target.value)}
            style={{fontSize: '1.5rem', fontWeight: '500', border: 'none'}}
        />
    )
}

export default Name;