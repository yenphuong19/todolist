import React, { useContext } from 'react';
import { Context } from '../../services/Context';

function TimeSelector () {
    const [props] = useContext(Context)
    return (
        <div>
            {
                props.showTimePicker
                && 
                <ul>
                    <li>Hour</li>
                    <li>Minute</li>
                </ul>
            }
        </div>
    )
}

export default TimeSelector;