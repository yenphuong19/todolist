import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { MODE_NONE, MODE_CREATE, MODE_EDIT } from '../../services/mode';
import { changeName } from '../../services/reducer';
import './JobName.scss';

function JobName () {
    const [props] = useContext(Context)
    const [job, index] = useContext(RenderContext)

    // Khi action edit job >> render ô input có thể chỉnh sửa
    if (props.mode !== MODE_NONE && job.edited) {
        return (
            <input 
                className="job__name editor"
                autoFocus
                value={job.name}
                placeholder="Task name"
                onChange={(e) => {
                    props.dispatch(changeName(e.target.value, index));

                    // JobName rỗng >> disabled Button Save
                    if (e.target.value === '') {
                        props.setDisabledButton(true)
                    } else {
                        props.setDisabledButton(false)
                    }
                }}
            />
        )
    }

    return (
        <input 
            className="job__name"
            value={job.name}
            disabled
        />
    )
}

export default JobName;