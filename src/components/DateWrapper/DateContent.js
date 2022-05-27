import React, { useContext } from "react";
import { format } from 'date-fns';
import { Context, RenderContext } from "../../services/Context";

function DateContent () {
    
    const [job, index] = useContext(RenderContext)

    return (
        <span>{format(job.date, 'PP')}</span>
    )
}

export default DateContent;