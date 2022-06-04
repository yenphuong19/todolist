import React, { useContext } from "react";
import { Context, RenderContext } from "../../services/Context";
import { getDateContent } from '../../services/todo'

function DateContent() {
    const [job] = useContext(RenderContext)

    return (
        <span className="job__info-content date__content">{getDateContent(job.date)}</span>
    )
}

export default DateContent;