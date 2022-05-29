import React, { useContext } from 'react';
import { Context, RenderContext } from '../../services/Context';
import { MODE_NONE, MODE_CREATE, MODE_EDIT } from '../../services/mode';
import { changeName, setName } from '../../services/reducer';
import NameView from './NameView';
import NameEditor from './NameEditor';
import './JobName.scss';

function JobName () {
    const [props] = useContext(Context)
    const [job] = useContext(RenderContext)
    
    if (props.mode !== MODE_NONE && job.edited) {
        return <NameEditor />
    }

    return <NameView />
    
}

export default JobName;