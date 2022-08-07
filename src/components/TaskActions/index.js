import React, { useContext, useEffect, useRef } from 'react';
import { Context } from 'services/context/Context';
import { editTask, deleteTask, completedAction } from 'services/reducer/actions';
import { MODE_EDIT } from 'constants/mode';
import styled from 'styled-components';
import { Actions } from 'constants/action';

const Wrapper = styled.div`
    position: absolute;
    right: 0;
    margin-right: 16px;
    display: ${props => props.showJobActions ? 'flex' : 'none'};
    animation: fadeIn 0.15s ease-in-out;

    button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        text-align: center;

        i {
            color: #fff;
        }

        &:hover {
            opacity: 0.7;
        }
    }
`;

function TaskActions ({ task }) {
    const [props] = useContext(Context)

    const doneButtonRef =  useRef()
    const deleteButtonRef =  useRef()

    useEffect(() => {
        const handleClickDone = () => {
            console.log('click done')
            props.setShowToast({isShow: true, action: Actions.completed})
            props.dispatch(completedAction(task))
            const handle = setTimeout(() => {
                props.setShowToast({isShow: false});
            }, 2000)

            return () => {
                clearTimeout(handle)
            }
        }
        const handleClickDelete = () => {
            console.log('click delete')
            props.setShowToast({isShow: true, action: Actions.delete})
            props.dispatch(deleteTask(task))
            const handle = setTimeout(() => {
                props.setShowToast({isShow: false});
            }, 2000)

            return () => {
                clearTimeout(handle)
            }
        }

        doneButtonRef.current.addEventListener('click', handleClickDone)
        deleteButtonRef.current.addEventListener('click', handleClickDelete)

        return () => {
            doneButtonRef.current.removeEventListener('click', handleClickDone)
            deleteButtonRef.current.removeEventListener('click', handleClickDelete)
        }

    }, [task])

    const handleClickEdit = () => {
        props.setMode(MODE_EDIT);
        props.dispatch(editTask(task, true));
    }

    return (
        <Wrapper showJobActions={props.showJobActions === task.id}>
            {/* Done task */}
            <button 
                className="d-flex align-items-center "
                ref={doneButtonRef}
                style={{backgroundColor: '#32C200'}}
            >
                <i className="bi bi-check-lg"></i>
            </button>

            {/* Edit task */}
            <button 
                onClick={handleClickEdit}
                style={{backgroundColor: '#B1B1B1', marginLeft: '8px'}}
            >
                <i className="bi bi-pencil-fill"></i>
            </button>

            {/* Delete task */}
            <button 
                ref={deleteButtonRef}
                style={{backgroundColor: '#FF0000', marginLeft: '8px'}}
            >
                <i className="bi bi-trash-fill"></i>
            </button>
        </Wrapper>
    )
}

export default TaskActions;