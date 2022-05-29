import React, { useContext } from 'react';
import { RenderContext } from '../../services/Context';

function NameView () {
    const [job] = useContext(RenderContext)
    return (
        <input 
            className="job__name"
            value={job.name}
            disabled
        />
    )
}

export default NameView;