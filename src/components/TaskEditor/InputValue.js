import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { changeInfo, setInfo } from 'services/reducer';
import { MODE_EDIT } from 'constants/mode';

function InputValue ({ task, inputName }) {
    const [props] = useContext(Context)

    const handleChangeValue = e => {
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: inputName, task, value: e.target.value })) : 
        props.dispatch(setInfo({ name: inputName, value: e.target.value }))
    }

    return (
        <input 
            autoFocus={inputName === 'name'}
            value={task[inputName]}
            placeholder={`Task ${inputName}`}
            onChange={handleChangeValue}
            style={inputName === 'name' ? style.name : style.description}
        />
    )
}

export default InputValue;

const style = {
    name: {
        fontSize: '1.5rem', 
        fontWeight: '500', 
        border: 'none'
    },
    description: {
        fontSize: '1.2rem', 
        border: 'none', 
        margin: '6px 0 16px', 
        color: '#999'
    }
}