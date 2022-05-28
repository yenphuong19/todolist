import React, { memo, useContext } from 'react';
import ButtonAdd from '../Buttons/ButtonAdd';
import AddArea from './AddArea';
import { Context, RenderContext } from '../../services/Context';
import { MODE_CREATE } from '../../services/mode';
import { editJob } from '../../services/reducer';
import './JobAdd.scss';
import JobEditor from '../JobEditor';
import ButtonRounded from '../ButtonRounded';

function JobAdd () {
    const [job, index] = useContext(RenderContext)

    const [props] = useContext (Context)
    const handleClickAdd = () => {
        props.setMode(MODE_CREATE);
        props.setShowJobEditor(!props.showJobEditor);
        props.dispatch(editJob(job.name, index, true))
    }
    
    switch (props.mode) {

        case MODE_CREATE:
            return (
                <>
                    <JobEditor />
                    <ButtonRounded />
                </>
            )

        default:
            return (
                <div 
                    className="job__item job__add"
                    onClick={handleClickAdd}
                >
                    <ButtonAdd />
                    <span>Add task</span>
                </div>
            )   
    }
  
}

export default JobAdd;