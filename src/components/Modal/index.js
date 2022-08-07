import React, { useContext, useRef } from 'react';
import { Context } from 'services/context/Context';
import styled from 'styled-components';
import TaskEditor from 'components/TaskEditor';
import useOnClickOutSide from 'services/hook/useOnClickOutSide';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    z-index: 5;
`;

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
`;

const Body = styled.div`
    box-shadow: 0 0 20px #c3c3c3;
    margin: 200px auto auto;
    width: 580px;
    border-radius: 6px;
    background-color: #fff;
    z-index: 10;
    animation: appear 0.2s ease-in-out;

    form {
        border: none;
    }

    .buttons {
        padding-right: 12px;
    }

    @media (max-width: 740px) {
        margin: 200px 10px auto;
    }
`;

function Modal () {
    const [props] = useContext(Context)

    const modalRef = useRef()

    useOnClickOutSide(modalRef, () => props.setShowModal(false))

    return (
        <Wrapper>
            <Overlay></Overlay>
            <Body >
                <div ref={modalRef}>
                    <TaskEditor task={props.state.task} dateDefault={new Date()}/>
                </div>
            </Body>
        </Wrapper>
    )
}

export default Modal;