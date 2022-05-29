import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { MODE_EDIT } from '../../services/mode';
import { changeDescription, setDescription } from '../../services/reducer';

function DescriptionEditor () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const handleChangeDescription = (param) => {
        props.mode === MODE_EDIT ?
        props.dispatch(changeDescription(param.target.value, index)) :
        props.dispatch(setDescription(param.target.value))
    }
    return (
        <input 
            className='job__description editor'
            placeholder="Description"
            value={props.mode === MODE_EDIT ? job.description : props.state.job.description}
            onChange={e => handleChangeDescription(e)}
        />
    )
}

export default DescriptionEditor;