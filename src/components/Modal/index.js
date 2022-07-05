import React, { useContext } from 'react';
import { Context } from 'services/Context';
import styled from 'styled-components';
import TaskEditor from 'components/TaskEditor';
import Buttons from 'components/Buttons';

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 5;
    
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .body {
        box-shadow: 0 0 10px #c3c3c3;
        display: flex;
        flex-direction: column;
        margin: 120px auto auto auto;
        width: 580px;
        border-radius: 6px;
        background-color: #fff;
        z-index: 10;

        .buttons {
            margin: 16px 16px 0;
        }
    }
`;

function Modal () {
    const [props] = useContext(Context)
    return (
        <StyledModal>
            <div className='overlay'></div>
            <div className='body'>
                <div>
                    <TaskEditor task={props.state.task}/>
                </div>
                <div className='buttons'>
                    <Buttons task={props.state.task}/>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;