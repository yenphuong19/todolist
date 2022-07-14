import React, { Fragment, useContext } from "react";
import { Context } from "services/Context";
import Modal from "components/Modal";
import { getListRender } from "services/todo";
import TaskItem from "components/TaskItem";

function Search () {
    const [props] = useContext(Context)
    const tasksResult = 
        props.state.tasks.all
            .filter(task => {
            return task.name
                .toString()
                .toLowerCase()
                .indexOf(props.query.toLowerCase()) > -1
        })
       
    return (
        <div>
            <h2>Result for "{props.query}"</h2>
            {props.showModal && <Modal />}
            {
                tasksResult.length
                ?
                tasksResult
                    .map((task, index) => 
                        <TaskItem
                            task={task}
                            index={index}    
                            key={index}                    
                        />
                    )
                : 
                <Fragment>No result</Fragment>
            }
        </div>
    )
}

export default Search;