import React, { useContext } from 'react';
import { Context } from '../../services/Context';
import { MODE_NONE } from '../../services/mode';
import { cancelAction } from '../../services/reducer';

function ButtonSecondary () {
    
    const [props] = useContext(Context)

    const handleClick = () => {
        props.setMode(MODE_NONE);
        props.dispatch(cancelAction(props.state.jobs))
    }

    return (
        <button 
            className="btn-secondary"
            onClick={handleClick}
        >Cancel</button>
    )
}

export default ButtonSecondary;