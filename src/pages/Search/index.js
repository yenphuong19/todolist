import React, { Fragment, useContext } from "react";
import { Context } from "services/Context";
import Modal from "components/Modal";
import { getListRender } from "services/todo";
import TaskItem from "components/TaskItem";

function Search () {
    const [props] = useContext(Context)
    return (
        <div className="col-9 vh-100" style={{padding: '80px'}}>
            <h2 >
                Result for "{props.query}"
            </h2>
            {props.showModal && <Modal />}
            {
                props.query !== ''
                ?
                props.state.tasks.all
                    .filter(task => {
                        return task.name
                            .toString()
                            .toLowerCase()
                            .indexOf(props.query.toLowerCase()) > -1
                    })
                    .map((task, index) => 
                        <TaskItem
                            task={task}
                            index={index}    
                            key={index}                    
                        />
                    )
                : 
                <Fragment></Fragment>
            }
        </div>
    )
}

export default Search;