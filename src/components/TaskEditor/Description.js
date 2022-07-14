import React, { useContext, useState } from 'react';
import { Context } from 'services/Context';
import { MODE_EDIT } from 'constants/mode';
import { changeInfo, setInfo } from 'services/reducer';
import styled from 'styled-components';

function Description ({ task, index }) {
    const [props] = useContext(Context)
    const [description, setDescription] = useState(task.description)
    const handleChangeDescription = e => {
        setDescription(e.target.value)
        props.mode === MODE_EDIT ?
        props.dispatch(changeInfo({ name: 'description', task, value: e.target.value })) :
        props.dispatch(setInfo({ name: 'description', value: e.target.value }))
    }
    return (
        <input 
            placeholder="Description"
            value={props.mode === MODE_EDIT ? description : props.state.task.description}
            onChange={handleChangeDescription}
            style={{fontSize: '1.2rem', border: 'none', margin: '6px 0 16px', color: '#999'}}
        />
    )
}

export default Description;