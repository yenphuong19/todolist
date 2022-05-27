import React, { memo, useContext } from 'react';
import JobEditor from '../JobEditor/index';
import ButtonAdd from '../Buttons/ButtonAdd';
import AddingArea from './AddingArea';
import { Context } from '../../services/Context';
import { MODE_CREATE } from '../../services/mode';
import { editJob } from '../../services/reducer';
import './ActionAdd.scss';

function ActionAdd () {
    const [props] = useContext (Context)
    const handleClickAdd = () => {
        props.setMode(MODE_CREATE);
        props.setShowJobEditor(!props.showJobEditor);
        props.dispatch(editJob())
    }
    
    if (props.mode === MODE_CREATE) {
        return <AddingArea />
    }
 
    return (
        <div 
            className="job__add"
            onClick={handleClickAdd}
        >
            <ButtonAdd />
            <span>Add task</span>
        </div>
    )   
}

export default ActionAdd;