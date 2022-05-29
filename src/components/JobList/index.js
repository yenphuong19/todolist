import React, { useContext } from 'react';
import JobWrapper from '../JobWrapper/index';
import { Context, RenderContext } from '../../services/Context';
import { getListRender } from '../../services/todo';
import './JobList.scss';

function JobList () {
    const [props] = useContext(Context)
    console.log(props.state)
    return (
        <div className="job__list">
            {
                getListRender(props.state.jobs, props.mode, props.filter, props.query).map(
                    (job, index) => (
                        <RenderContext.Provider value={[job, index]} key={index}>
                            <JobWrapper />
                        </RenderContext.Provider>
                    )
                )
            }
        </div>
    )
   

}

export default JobList;