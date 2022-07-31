import React, { Fragment, useContext } from "react";
import { Context } from "services/Context";
import Modal from "components/Modal";
import { getListRender } from "services/todo";
import TaskItem from "components/TaskItem";
import { Images } from "constants";
import styled from "styled-components";
import styles from "react-day-picker/dist/style.css";

const NoResult = styled.div`
    padding-top: 20px;
    width: 260px;
    text-align: center;
    margin: auto;

    img {
        padding-bottom: 20px;
    }
`;
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
        <Fragment>
            <h2>Result for "{props.query}"</h2>
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
                <NoResult>
                    <img src={Images.NO_SEARCHRESULT} alt='no_result'></img>
                    <span>No matches for “{props.query}”</span>
                </NoResult>
            }
        </Fragment>
    )
}

export default Search;