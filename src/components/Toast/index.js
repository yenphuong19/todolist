import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: space-between;
    align-items: center;
    text-align: center;

    position: fixed;
    top: 80px;
    right: 10px;
    max-width: 200px;
    height: 50px;
    padding-left: 10px;
    
    background-color: rgba(3, 3, 3, 0.7);
    color: #fff;
    
    border-radius: 4px;
    box-shadow: 0 0 2px #c3c3c3;

    animation: slideToLeft ease .5s, slideToRight ease .5s 1.5s forwards;
`;


Toast.defaultProps = {
    action: ''
}

function Toast ({ show, action }) {
    return (
        <Wrapper show={show}>
            <span className="toast_message">{action.message}</span>
        </Wrapper>
    )
}

export default Toast;