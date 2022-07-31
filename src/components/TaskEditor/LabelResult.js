import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    padding: 0 4px;
    margin-right: 4px;
    background-color: #f3c2bc;
    border-radius: 4px;
    font-size: 1.4rem;
    display: ${props => props.showContent ? 'block' : 'none'};
   
`;

function LabelResult ({ task }) {

    return (
        <Wrapper showContent={task.label === 'None' ? false : true}>
            # 
            <span>{task.label}</span>
        </Wrapper>
    )
}

export default LabelResult;