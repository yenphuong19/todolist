import React, { useContext } from 'react';
import { Context } from 'services/Context';
import { MODE_EDIT } from 'constants/mode';
import { changeInfo, setInfo } from 'services/reducer';
import styled from 'styled-components';

function Description ({ task, index }) {
    const [props] = useContext(Context)
    const handleChangeDescription = (param) => {
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: 'description', task, value: param })) :
        props.dispatch(setInfo({ name: 'description', value: param }))
    }
    return (
        <input 
            placeholder="Description"
            value={props.mode === MODE_EDIT ? task.description : props.state.task.description}
            onChange={e => handleChangeDescription(e.target.value)}
            style={{fontSize: '1.2rem', border: 'none', margin: '6px 0 16px', color: '#999'}}
        />
    )
}

export default Description;