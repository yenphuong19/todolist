import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { changeName, setName } from '../../services/reducer';
import { MODE_NONE, MODE_CREATE, MODE_EDIT } from '../../services/mode';

function NameEditor () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)
    const handleChangeName = (param) => {
        if (props.mode === MODE_EDIT) {
            props.dispatch(changeName(param.target.value, index));
        } else {
            props.dispatch(setName(param.target.value))
        }

        // JobName rỗng >> disabled Button Save/Add
        param.target.value === '' ? props.setDisabledButton(true) : props.setDisabledButton(false)
    }
    return (
        <input 
            className="job__name editor"
            autoFocus
            value={props.mode === MODE_EDIT ? job.name : props.state.job.name}
            placeholder="Task name"
            onChange={e => handleChangeName(e)}
        />
    )
}

export default NameEditor;