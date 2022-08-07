import { useContext } from 'react';
import { Context } from 'services/context/Context';
import { MODE_NONE } from 'constants/mode';
import { cancelAction, editTask } from 'services/reducer/actions';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #ddd;
    color: #333;
    padding: 6px 10px;
    border-radius: 6px;
    margin-right: 10px;
    min-width: 70px;
    font-weight: 500;
    
    &:hover {
        opacity: 0.7;
    }
`;

function ButtonSecondary ({ task }) {
    
    const [props] = useContext(Context)

    const handleClick = () => {
        props.setMode(MODE_NONE);
        props.dispatch(cancelAction());
        props.dispatch(editTask(task, false));
        props.setShowModal(false)
    }

    return (
        <Button onClick={handleClick}>Cancel</Button>
    )
}

export default ButtonSecondary;
