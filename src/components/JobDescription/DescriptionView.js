import React, { useContext } from 'react';
import { RenderContext } from '../../services/Context';

function DescriptionView () {
    const [job] = useContext(RenderContext)
    return (
        <input 
            disabled
            className={`job__description`}
            value={job.description}
        />
    )
}

export default DescriptionView;