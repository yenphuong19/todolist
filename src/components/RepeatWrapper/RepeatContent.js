import React, { useContext } from "react";
import { RenderContext } from "../../services/Context";

function RepeatContent () {
    const [job, index] = useContext(RenderContext)
    return (
        <span className="job__info-content repeat__content">{job.repeat}</span>
    )
}

export default RepeatContent;